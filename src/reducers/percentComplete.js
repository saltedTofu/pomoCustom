const percentComplete = (state=0, action) => {
    switch(action.type){
        case 'increment 1%':
            return state+1
        default:
            return state
    }
}
export default percentComplete;