const currentPhase = (state='Work', action) => {
    switch(action.type){
        case 'change to rest':
            return 'Rest'
        case 'change to work':
            return 'Work'
        default:
            return state
    }
}
export default currentPhase;