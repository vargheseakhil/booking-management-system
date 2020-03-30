import * as actionTypes from '../service/util/constants';

const initialState = {
    bookings:[],
    isDataFetchDone: false,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_BOOKINGS_SUCCESS:
        return {
            ...state,
            ...action.response,
            isDataFetchDone: true,
        }
        case actionTypes.UPDATE_BOOKING:
         return {
            ...state,
            bookings: [...action.response]
        }
        default:
            return {
                ...state,
            }
    }
};

export default reducer;