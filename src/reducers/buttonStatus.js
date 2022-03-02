const buttonStatus = (state=false, action) => {
    switch(action.type){
        case 'switch button status':
            return !state
        default:
            return state
    }
}
export default buttonStatus;