import { createCss } from '@stitches/react';

const { styled, global } = createCss({
    theme: {
        colors: {
            background: '#1F2229',
            background2: '#2E303C',
            backgroundButton: '#373945',
            backgroundButton2: '#4B4D59',
            yellow: '#FAE800',
            gray: '#BEC2C6',
            white: '#FBFBFB'
        }
    },





})
const globalStyles = global({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    body: {
        font: '16px "Poppins", Arial, sans-serif',
        color: '$white',
        background: '$background'
    },
    input: {
        fontFamily: "Poppins"
    },
    textarea: {
        fontFamily: "Poppins"
    },

    button: {
        cursor: 'pointer'
    }
})
globalStyles();


export { styled };