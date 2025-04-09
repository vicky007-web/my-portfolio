const initialState = {
    activeTab: 'home' // Ensure consistency with other parts of the app
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_TAB':
            return { ...state, activeTab: action.payload }; // Corrected key

        default:
            return state;
    }
};

export default rootReducer;
