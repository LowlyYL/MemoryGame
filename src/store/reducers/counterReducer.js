const initialState = {
    count: 0,
}

const COUNT_ADD = 'COUNT_ADD';

export const countAdd = () => ({
    type: COUNT_ADD,
})

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case COUNT_ADD: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        default: {
            return state
        }
    }
}

export default counterReducer;