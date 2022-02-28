//change theme
export const setTheme = (selectedTheme) => {
    return{
        type: 'set theme',
        payload:selectedTheme
    }
}
//increment percent complete
export const setPercent = (number) => {
    return{
        type:'set percent',
        payload:number
    }
}
//reset percent complete
export const resetPercent = () => {
    return{
        type:'reset percent',
    }
}
//change phases
export const changeToWork = () => {
    return{
        type:'change to work'
    };
}
export const changeToRest = () =>{
    return{
        type:'change to rest'
    }
}
//work timer action
export const incrementWork = () => {
    return{
        type:'increment work'
    };
}
export const decrementWork = () => {
    return{
        type:'decrement work'
    };
}
export const typeWork = (number) => {
    return{
        type:'type work',
        payload:number
    }
}
//rest timer action
export const incrementRest = () => {
    return{
        type:'increment rest'
    };
}
export const decrementRest = () => {
    return{
        type:'decrement rest'
    };
}
export const typeRest = (number) => {
    return{
        type:'type rest',
        payload:number
    }
}
//rounds action
export const incrementRounds = () => {
    return{
        type:'increment round'
    };
}
export const decrementRounds = () => {
    return{
        type:'decrement round'
    };
}
export const typeRounds = (number) => {
    return{
        type:'type round',
        payload:number
    }
}
