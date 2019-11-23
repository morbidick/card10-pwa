import { rgbColor } from '../utils'
import { rainbowArray, currentTimeAsBigEndian } from './utils'
export const rgbCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => {
	let char: BluetoothRemoteGATTCharacteristic
	return {
		read: async (): Promise<rgbColor> => {
			char = char || (await service.getCharacteristic(uuid))
			const data = await char.readValue()
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
			char = char || (await service.getCharacteristic(uuid))
			return char.writeValue(data)
		},
	}
}

export const rgbArrayCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string,
	length: number
) => {
	let char: BluetoothRemoteGATTCharacteristic
	const write = async (colors: rgbColor[]) => {
		const data = new Uint8Array(length * 3)

		colors.forEach(({ red, green, blue }, i) => {
			const offset = i * 3
			data[offset + 0] = red
			data[offset + 1] = green
			data[offset + 2] = blue
		})
		char = char || (await service.getCharacteristic(uuid))
		return char.writeValue(data)
	}

	return {
		read: async () => {
			char = char || (await service.getCharacteristic(uuid))
			return new Uint8Array((await char.readValue()).buffer)
		},
		write,
		sameColor: async (c: rgbColor) => {
			return write(new Array(length).fill(c))
		},
		rainbow: async () => {
			char = char || (await service.getCharacteristic(uuid))
			return char.writeValue(rainbowArray)
		},
	}
}

export const numberCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => {
	let char: BluetoothRemoteGATTCharacteristic
	return {
		write: async (time: number) => {
			const data = new Uint16Array(1)
			data[0] = time
			char = char || (await service.getCharacteristic(uuid))
			return char.writeValue(data)
		},
	}
}

export const timeCharacteristic = (
	service: BluetoothRemoteGATTService,
	uuid: string
) => {
	let char: BluetoothRemoteGATTCharacteristic
	return {
		now: async () => {
			char = char || (await service.getCharacteristic(uuid))
			return char.writeValue(currentTimeAsBigEndian())
		},
	}
}
