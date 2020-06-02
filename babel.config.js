module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
        '@babel/plugin-proposal-decorators',
        {
            legacy: true
        }
    ],
    plugins: [
        require('@babel/plugin-proposal-decorators').default,
        {
            legacy: true
        }
    ]
};