


export const ACTIONS = {
    FETCH_TASK_LIST: 'FETCH_TASK_LIST',
    FETCH_TASK_LIST_SUCCESS: 'FETCH_TASK_LIST_SUCCESS',
    FETCH_TASK_LIST_FAILURE: 'FETCH_TASK_LIST_FAILURE',
}

export const getAllTaskList = () => {
    return {
        type: ACTIONS.FETCH_TASK_LIST
    }
}

export const getAllTaskListSuccess = (lists = []) => {
    return {
        type: ACTIONS.FETCH_TASK_LIST_SUCCESS,
        payload: lists
    }
}

export const getAllTaskFailure = (error) => {
    return {
        type: ACTIONS.FETCH_TASK_LIST_FAILURE,
        payload: error
    }
}

export const fetchAllTaskList = (dispatch) => {
    return async () => {
        try {
            // Dispatching action for loading
            dispatch(getAllTaskFailure());

            //// API CALL
            const {data} = await getAllTaskList();
            console.log(':: fetchAlltasklist ::', data);

            //Dispatching actinon for uploading task list
            dispatch(getAllTaskListSuccess(data));
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            dispatch(getAllTaskFailure(errorMessage))
        }
    }
}

