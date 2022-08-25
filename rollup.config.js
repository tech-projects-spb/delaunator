const {terser} = require('rollup-plugin-terser');
const resolve = require('@rollup/plugin-node-resolve');

const config = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'Delaunator',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

export default [
    config('delaunator.js', [resolve.nodeResolve()]),
    config('delaunator.min.js', [resolve.nodeResolve(), terser()])
];
