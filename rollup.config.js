import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

// dev build if watching, prod build if not
const dev = !!process.env.ROLLUP_WATCH;

export default {
	input: './src/app.ts',
	output: {
		format: 'esm',
		file: './dist/app.js',
		sourcemap: true,
	},
	plugins: [
		dev && serve(),
		resolve(),
		typescript({
			objectHashIgnoreUnknownHack: true
		}),
		copy({
			targets: [
				{ src: 'src/index.html', dest: 'dist' },
			]
		}),
	]
}
