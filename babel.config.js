export default {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'chrome>=61, safari>=11, firefox>=65, not IE 11'
            }
        ]
    ],
    plugins: [
        [
            '@vue/babel-plugin-jsx',
            {
                mergeProps: false,
                enableObjectSlots: false
            }
        ]
    ]
};
