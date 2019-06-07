let defaultState = {
    selectedTab:"home"
}

const global = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET-SELECTED-TAB':
            return{
                ...state,
                selectedTab:action.payload,
            }
        default:        
            return state;
    }
}

export default global;