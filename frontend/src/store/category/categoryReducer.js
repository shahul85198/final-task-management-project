import { ACTIONS } from "./action";


const initialState = {
    categories: []
}

export default function categoryReducer(state = initialState, action) {
    console.log(":: invoking categoryReducer ::", {state, action});
    switch (type) {
        case ACTIONS.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload
            }
            default: 
            return state
    }
}



