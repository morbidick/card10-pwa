import { rgbColor } from '../utils'
import { rainbowArray, currentTimeAsBigEndian } from './utils'
export const rgbCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => ({
	read: async (): Promise<rgbColor> => {
		const c = await service.getCharacteristic(uuid)
		const data = await c.readValue()
		return {
			red: data.getUint8(0),
			green: data.getUint8(1),
			blue: data.getUint8(2),
		}
	},
	write: async ({ red, green, blue }: rgbColor) => {
		const data = new Uint8Array(3)
		data[0] = red
		data[1] = green
		data[2] = blue
		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(data)
	},
})

export const rgbArrayCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string,
	length: number
) => {
	const write = async (colors: rgbColor[]) => {
		const data = new Uint8Array(length * 3)

		colors.forEach(({ red, green, blue }, i) => {
			const offset = i * 3
			data[offset + 0] = red
			data[offset + 1] = green
			data[offset + 2] = blue
		})
		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(data)
	}

	return {
		read: async () => {
			const c = await service.getCharacteristic(uuid)
			return new Uint8Array((await c.readValue()).buffer)
		},
		sameColor: async (c: rgbColor) => {
			return await write(new Array(length).fill(c))
		},
		rainbow: async () => {
			const c = await service.getCharacteristic(uuid)
			return await c.writeValue(rainbowArray)
		},
	}
}

export const numberCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => ({
	write: async (time: number) => {
		const data = new Uint16Array(1)
		data[0] = time
		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(data)
	},
})

export const timeCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => ({
	now: async () => {
		const c = await service.getCharacteristic(uuid)
		return await c.writeValue(currentTimeAsBigEndian())
	},
})
