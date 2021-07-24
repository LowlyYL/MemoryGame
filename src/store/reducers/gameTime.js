const initialState = {
    time: '',
}

const TIME_GAME = 'TIME_GAME';

export const setTimeGame = (str) => ({
    type: TIME_GAME,
    str
})

const gameTime = (state = initialState, action) => {
    switch(action.type) {
        case TIME_GAME: {
            return {
                ...state,
                time: action.str,
            }
        }
        default: {
            return state
        }
    }
}

export default gameTime;