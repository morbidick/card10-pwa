import serve from 'rollup-plugin-serve';
import indexHTML from 'rollup-plugin-index-html';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser'

// dev build if watching, prod build if not
const dev = process.env.ROLLUP_WATCH;

const filenames = `[name].${dev ? 'dev' : '[hash]'}.js`

export default {
	input: './src/index.html',
	output: {
		dir: './dist',
		format: 'esm',
		sourcemap: true,
		entryFileNames: filenames,
		chunkFileNames: filenames,
	},
	plugins: [
		dev && serve('dist'),
		indexHTML(),
		resolve(),
		typescript({
			objectHashIgnoreUnknownHack: true
		}),
		!dev && minifyHTML(),
		!dev && terser(),
	],
}
