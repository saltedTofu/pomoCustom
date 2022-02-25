const percentComplete = (state=0, action) => {
    switch(action.type){
        case 'increment percent':
            return state+action.payload
        default:
            return state
    }
}
export default percentComplete;