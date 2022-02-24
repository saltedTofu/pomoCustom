const theme = (state='dark', action) => {
    switch(action.type){
        case 'set theme':
            return action.payload
        default:
            return state
    }
}
export default theme;