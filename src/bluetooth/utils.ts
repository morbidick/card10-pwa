export const rainbowArray = new Uint8Array([
	0xff,
	0x00,
	0x00,
	0xff,
	0x8b,
	0x00,
	0xe8,
	0xff,
	0x00,
	0x5d,
	0xff,
	0x00,
	0x00,
	0xff,
	0x2e,
	0x00,
	0xff,
	0xb9,
	0x00,
	0xb9,
	0xff,
	0x00,
	0x2e,
	0xff,
	0x5d,
	0x00,
	0xff,
	0xe8,
	0x00,
	0xff,
	0xff,
	0x00,
	0x8b,
])

export const currentTimeAsBigEndian = () => {
	const data = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
	const utcTime = Date.now() + new Date().getTimezoneOffset() * 60000
	const hexTime = utcTime.toString(16)

	let sourceI = hexTime.length - 1
	let targetI = data.length - 1
	while (sourceI >= 0) {
		data[targetI] = parseInt(
			`${hexTime[sourceI - 1] || 0}${hexTime[sourceI]}`,
			16
		)
		targetI = targetI - 1
		sourceI = sourceI - 2
	}
	return data
}
