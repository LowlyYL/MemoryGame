const initialState = {
    timer: false,
}

const TIMER_ON = 'TIMER_ON';
const TIMER_OFF = 'TIMER_OFF';

export const timerOn = () => ({
    type: TIMER_ON,
})

export const timerOff = () => ({
    type: TIMER_OFF,
})

const timerReducer = (state = initialState, action) => {
    switch(action.type) {
        case TIMER_ON: {
            return {
                ...state,
                timer: true,
            }
        }
        case TIMER_OFF: {
            return {
                ...state,
                timer: false,
            }
        }
        default: {
            return state
        }
    }
}

export default timerReducer;