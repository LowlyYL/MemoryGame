const initialState = {
    firstName: '',
    lastName: '',
    email: '',
}

const SET_DATA_PLAYER = 'SET_DATA_PLAYER';

export const setDataPlayer = (firstName, lastName, email) => ({
    type: SET_DATA_PLAYER,
    firstName,
    lastName,
    email
})

const playerDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA_PLAYER: {
            return {
                ...state,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
            }
        }
        default: {
            return state
        }
    }
}

export default playerDataReducer;