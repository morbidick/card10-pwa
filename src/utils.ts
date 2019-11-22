export type rgbColor = {
	red: number
	green: number
	blue: number
}

// thanks https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function rgbToHex({ red, green, blue }: rgbColor): string {
	return (
		'#' +
		((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
	)
}
export function hexToRgb(hex: string): rgbColor {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? {
				red: parseInt(result[1], 16),
				green: parseInt(result[2], 16),
				blue: parseInt(result[3], 16),
		  }
		: { red: 0, green: 0, blue: 0 }
}

export type InputEvent = {
	target: {
		value: string
	}
}
