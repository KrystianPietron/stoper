const START_STOPER = 'stoper/START_STOPER'
const STOP_STOPER = 'stoper/STOP_STOPER'
const RESET_STOPER = 'stoper/RESET_STOPER'

const INITIAL_STATE = {
    min: 0,
    sec: 0,
    msec: 0,
}


let interval = null

export const stopAsyncAction = () => (dispatch, getState) => {
    clearInterval(interval)
    dispatch(stopStoper())
}

export const startAction = () => (dispatch, getState) => {
    let { stoper: { msec, sec, min } } = getState()
    msec = 0
    sec = 0
    min = 0
    dispatch(startStoper(msec, sec, min))
    clearInterval(interval)
    interval = setInterval(() => {

        if (msec !== 100) {
            msec++
            dispatch(startStoper(msec, sec, min))
        } else {
            msec = 0
            sec++
            dispatch(startStoper(msec, sec, min))
        }

        if (sec === 60) {
            sec = 0
            min++
            dispatch(startStoper(msec, sec, min))
        }
    }, 10
    )
}

const stopStoper = () => ({
    type: STOP_STOPER
})

const startStoper = (msec, sec, min) => ({
    type: START_STOPER,
    msec,
    sec,
    min
})

export const resetStoper = () => ({
    type: RESET_STOPER
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_STOPER:
            return {
                ...state,
                msec: action.msec,
                sec: action.sec,
                min: action.min
            }
        case STOP_STOPER:
            return {
                ...state
            }
        case RESET_STOPER:
            return {
                ...state,
                min: 0,
                sec: 0,
                msec: 0
            }
        default:
            return state
    }
}