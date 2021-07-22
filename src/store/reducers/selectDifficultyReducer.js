const initialState = {
    difficulty: 'EASY'
}

export const EASY = 'EASY';
export const MIDDLE = 'MIDDLE';
export const DIFFICULT = 'DIFFICULT';

export const easyLevel = () => ({
    type: EASY,
})

export const middleLevel = () => ({
    type: MIDDLE,
})

export const difficultLevel = () => ({
    type: DIFFICULT,
})

const selectDifficultyReducer = (state = initialState, action) => {
    switch(action.type) {
        case EASY: {
            return {
                ...state,
                difficulty: EASY,
            }
        }
        case MIDDLE: {
            return {
                ...state,
                difficulty: MIDDLE,
            }
        }
        case DIFFICULT: {
            return {
                ...state,
                difficulty: DIFFICULT,
            }
        }
        default: {
            return state
        }
    }
}

export default selectDifficultyReducer;