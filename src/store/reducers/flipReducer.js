const initialState = {
    count: 0,
    srcFirst: '',
    srcSecond: '',
}

const FLIP_CARD = 'FLIP_CARD';
const NEW_ROUND = 'NEW_ROUND';

export const flipCard = (srcImg) => ({
    type: FLIP_CARD,
    srcImg,
})

export const newRound = () => ({
    type: NEW_ROUND,
})

const flipReducer = (state = initialState, action) => {
    switch(action.type) {
        case FLIP_CARD: {
            if(state.count === 0) {
                return {
                    ...state,
                count: state.count + 1,
                srcFirst: action.srcImg,
                }
            } else if(state.count === 1) {
                return {
                    ...state,
                count: state.count + 1,
                srcSecond: action.srcImg,
                }
            }
        }
        case NEW_ROUND: {
            return {
                ...state,
                count: 0,
                srcFirst: null,
                srcSecond: null,
            }
        }
        default: {
            return state
        }
    }
}

export default flipReducer;