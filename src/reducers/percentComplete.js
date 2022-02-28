const percentComplete = (state=0, action) => {
    switch(action.type){
        case 'set percent':
            return action.payload
        case 'reset percent':
            return 0
        default:
            return state
    }
}
export default percentComplete;