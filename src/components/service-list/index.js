import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux'
import { func, shape, arrayOf } from 'prop-types'
import { updateBooking } from '../../store/actions'
import { getBookingsByCount, updateBookingsById } from '../../service/util/bookings'

import BookingList from '../booking-list'
import AddBanner from '../add-banner'
import ViewMore from '../view-more'

const ServiceList = ({bookings, updateBookings}) => {

    const [endIndex, setEndIndex] = useState(5)

    const handleUpdate = (bookingId) => {
        const updatedBookings = updateBookingsById(bookingId, bookings, 'PAYMENT')
        updateBookings(updatedBookings)
    }

    const serviceBookings = getBookingsByCount('ACTIVE',bookings, endIndex)

    return (
    <div className="payment-list" >
    <AddBanner />
    { serviceBookings.length ? 
      <Fragment>
      <BookingList 
        bookings={serviceBookings}
        handleUpdate={handleUpdate}
        pageName='Service'
      />
      <ViewMore 
      bookings={bookings}
      clickHandler={setEndIndex}
      endIndex={endIndex}
      bookingType="ACTIVE"
      />
      </Fragment>
      :
      <label className="grey bold"> No bookings found </label>
    }
    </div>
)}

ServiceList.propTypes = {
    bookings: arrayOf(shape({})).isRequired,
    updateBookings: func.isRequired,
}
ServiceList.defaultProps = {
    updateBookings: (x) => (x),
}

const mapStateToProps = state => ({bookings: state.bookings})

const mapDispatchToProps = dispatch => {
    return {
        updateBookings: (bookings) => {
            dispatch(updateBooking(bookings))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList)