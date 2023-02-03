const Left = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visable: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}
const Opacity = {
    hidden: {
        opacity: 0,
        
        
    },
    visable: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}
const Right = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visable: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}
const Bottom = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visable: custom => ({
        opacity: 1,
        y: 0,
        transition: {delay: custom * 0.2}
    })
}
export {Left, Opacity, Right, Bottom};