const currentPhase = (state='work', action) => {
    switch(action.type){
        case 'change to rest':
            return 'rest'
        case 'change to work':
            return 'work'
        default:
            return state
    }
}
export default currentPhase;