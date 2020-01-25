const HIT = 'action/HIT';

export function hit() {
    return {
        type: HIT
    };
}

const initialState = {
    score: 0
};

export function reducer(state = initialState, action) {
    if (action.type === HIT) {
        return {
            ...state,
            score: state.score + 1
        };
    }

    return state;
}
