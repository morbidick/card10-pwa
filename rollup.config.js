import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/app.ts',
	output: {
		format: 'esm',
		file: './dist/app.js',
		sourcemap: true,
	},
    plugins: [
		serve(),
		resolve(),
		typescript(),
    ]
}
