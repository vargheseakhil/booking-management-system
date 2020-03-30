import React, { useState, useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { func, shape, arrayOf, bool } from 'prop-types'
import BookingList from '../booking-list'
import AddBanner from '../add-banner'
import ViewMore from '../view-more'
import { fetchBookingsSuccess, updateBooking } from '../../store/actions'
import {
    getBookingsUrl,
    updateBookingsById,
    getBookingsByCount } from '../../service/util/bookings'

const RequestList = ({bookings, fetchBookings, updateBookings, isDataFetchDone}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [endIndex, setEndIndex] = useState(5)

    useEffect(() => {
        if (!isDataFetchDone) {
            setIsLoading(true)
            fetch(getBookingsUrl,{method: "GET",}).then(res => res.json())
            .then(response => {
              setIsLoading(false)
              fetchBookings(response)
            })
            .catch(error => console.log(error));
        }
      }, [isDataFetchDone, fetchBookings])

    const handleAcceptRequest = (bookingId) => {
        const updatedBookings = updateBookingsById(bookingId, bookings, 'ACTIVE')
        updateBookings(updatedBookings)
    }

    const listingRecords = getBookingsByCount('PENDING',bookings, endIndex)

    return (
    <div className="payment-list" >
    <AddBanner />
    {isLoading && !isDataFetchDone ? <h5>Loading...</h5> :  
        listingRecords.length ?
        <Fragment>
            <BookingList 
            bookings={listingRecords}
            handleUpdate={handleAcceptRequest}
            pageName='Request'
            />
            <ViewMore 
              bookings={bookings}
              clickHandler={setEndIndex}
              endIndex={endIndex}
              bookingType="PENDING"
              />
         </Fragment>
         :
        <label className="grey bold"> No bookings found </label> }
    </div>
)}

RequestList.propTypes = {
    bookings: arrayOf(shape({})).isRequired,
    fetchBookings: func.isRequired,
    updateBookings: func.isRequired,
    isDataFetchDone: bool.isRequired
}

const mapStateToProps = state => ({bookings: state.bookings, isDataFetchDone:state.isDataFetchDone})

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: (response) => dispatch(fetchBookingsSuccess(response)),
    updateBookings: (bookings) => {
        dispatch(updateBooking(bookings))
    },

})


export default connect(mapStateToProps, mapDispatchToProps)(RequestList)