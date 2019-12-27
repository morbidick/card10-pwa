import {
	numberCharacteristic,
	rgbCharacteristic,
	rgbArrayCharacteristic,
	timeCharacteristic,
} from './characteristics'

const serviceUUID = '42230200-2342-2342-2342-234223422342'

export class Card10 {
	constructor(private service: BluetoothRemoteGATTService) {}

	vibrate = numberCharacteristic(
		this.service,
		'4223020f-2342-2342-2342-234223422342'
	).write
	bottomLeftLed = rgbCharacteristic(
		this.service,
		'42230211-2342-2342-2342-234223422342'
	)
	bottomRightLed = rgbCharacteristic(
		this.service,
		'42230212-2342-2342-2342-234223422342'
	)
	topLeftLed = rgbCharacteristic(
		this.service,
		'42230214-2342-2342-2342-234223422342'
	)
	topRightLed = rgbCharacteristic(
		this.service,
		'42230213-2342-2342-2342-234223422342'
	)
	clock = timeCharacteristic(
		this.service,
		'42230201-2342-2342-2342-234223422342'
	)
	/* seems unsopprted until now ledStrip = rgbArrayCharacteristic(
		this.service,
		'42230220-2342-2342-2342-234223422342',
		11
	) */
}

export async function connect() {
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

	await card10.vibrate(100)
	//await card10.ledStrip.rainbow()
	console.log('BT initialized')

	return card10
}

export const supported = !!navigator.bluetooth
