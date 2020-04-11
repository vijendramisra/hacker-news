const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_DATA_PENDING":
            return {
                ...state,
                isLoading: true,
            };
        case "FETCH_DATA_COMPLETE":
            return {
                ...state,
                isLoading: false,
            };
        case "SET_DATA":
            return {
                ...state,
                data: payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                isError: true,
            };
        case "SET_PAGE_NUM":
            return {
                ...state,
                currentPageNum: payload.pageNum,
            };
        default:
            return state;
    }
};

export default reducer;
