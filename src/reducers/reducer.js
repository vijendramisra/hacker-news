const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_DATA":
            return {
                ...state,
                data: payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default reducer;
