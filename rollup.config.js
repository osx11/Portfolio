import typescript from 'rollup-plugin-typescript'

export default [
    {
        input: 'src/anchor_handler.ts',
        output: {
            file: 'static/js/anchor_handler.js',
            format: 'cjs'
        },
        plugins: [typescript()]
    },
    {
        input: 'src/quote_handler.ts',
        output: {
            file: 'static/js/quote_handler.js',
            format: 'cjs'
        },
        plugins: [typescript()]
    }
];
