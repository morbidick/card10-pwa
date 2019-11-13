const serviceUUID = '42230200-2342-2342-2342-234223422342'

const rgbLed = (service: BluetoothRemoteGATTService, uuid: string) => ({
	read: async () => {
		const c = await service.getCharacteristic(uuid)
		const data = await c.readValue()
		return {
			red: data.getUint8(0),
			green: data.getUint8(1),
			blue: data.getUint8(2),
		}
	},
	write: async ({ red = 0, green = 0, blue = 0 }) => {
		const data = new Uint8Array(3)
		data[0] = red
		data[1] = green
		data[2] = blue

		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(data)
	},
})

const vibrationMotor = (service: BluetoothRemoteGATTService, uuid: string) => ({
	write: async (time = 100) => {
		const data = new Uint16Array(1)
		data[0] = time

		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(data)
	},
})

export class Card10 {
	constructor(private service: BluetoothRemoteGATTService) {}

	vibrate = vibrationMotor(this.service, '4223020f-2342-2342-2342-234223422342').write
	bottomLeftLed = rgbLed(this.service, '42230211-2342-2342-2342-234223422342')
}

export async function connect() {
	if (!navigator.bluetooth)
		throw Error(
			`Browser doesn't support web Bluetooth, try the latest Chrome build`
		)

	console.log('Requesting Bluetooth Device...')
	const device = await navigator.bluetooth.requestDevice({
		filters: [{ services: [serviceUUID] }, { namePrefix: 'card10' }],
		optionalServices: [serviceUUID, 'battery_service'],
	})

	console.log('Connected to:' + device.name)

	console.log('Connecting to GATT Server...')
	if (!device.gatt) {
		throw Error('no gatt server available')
	}
	const server = await device.gatt.connect()

	console.log('Getting Service...')
	const service = await server.getPrimaryService(serviceUUID)

	const card10 = new Card10(service)

	await card10.vibrate()
	console.log('BT initialized')

	return card10
}
