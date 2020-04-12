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
            const retrievedData = localStorage.getItem("articleData");
            const retrievedObject = JSON.parse(retrievedData) || [];

            payload.hits = payload.hits.filter(
                (ar) =>
                    !retrievedObject.find((rm) => rm.objectID === ar.objectID)
            );

            return {
                ...state,
                data: payload,
            };
        case "SET_FILTERED_HIDE_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    hits: payload,
                },
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
