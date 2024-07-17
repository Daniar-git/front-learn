import { useReducer } from "react";

const initialScore = { count: 0}

type CounterState = {
    count: number
}

type InDecrementState = {
    // type: string,
    type: 'increment' | 'decrement',
    payload: number
}

type ResetState = {
    type: 'reset',
}

type ActionState = InDecrementState | ResetState

function reducer(state: CounterState, action: ActionState) {
    switch (action.type){
        case 'increment':
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        case 'reset':
            return initialScore
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialScore)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
            Decrement 10
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>
                reset
            </button>
        </>
    )
}