import * as actionTypes from '../service/util/constants'

export const fetchBookingsSuccess = (response) => ({
    type: actionTypes.FETCH_BOOKINGS_SUCCESS,
    response
})

export const updateBooking = (response) => ({
    type : actionTypes.UPDATE_BOOKING,
    response
})

// dispatch => ({
//     fetchBookings: (response) => dispatch(fetchBookingsSuccess(response)),
//     updateBookings: (response) => dispatch(updateBooking(response)),

// })
export const updateBookingsAction = (bookingId, state) => {
   console.log(bookingId, state)
}

export const fetchBookings = (response) => (dispatch) => {
    console.log('innnnnnnn')
    dispatch(fetchBookingsSuccess(response))
}

export const resetSavedRegDetails = (bookingId) => (dispatch, getState) => {
    console.log(getState(), bookingId)
    // dispatch(resetSavedRegDetailsStatus())
}

// bookings.forEach((booking) => {
//     if (booking.id === bookingId) booking.status = 'ACTIVE'
// })