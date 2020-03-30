import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { shape, arrayOf } from 'prop-types'
import { getBookingsByCount } from '../../service/util/bookings'

import BookingList from '../booking-list'
import AddBanner from '../add-banner'
import ViewMore from '../view-more'

const PaymentList = ({bookings}) => {

    const [endIndex, setEndIndex] = useState(5)
    const paymentBookings = getBookingsByCount('PAYMENT',bookings, endIndex)

    return (
    <div className="payment-list">
    <AddBanner />
    { paymentBookings.length ?
    <Fragment>
        <BookingList 
            bookings={paymentBookings}
            pageName='Payment'
        />
        <ViewMore 
        bookings={bookings}
        clickHandler={setEndIndex}
        endIndex={endIndex}
        bookingType="PAYMENT"
        />
    </Fragment>:
    <label className="grey bold"> No bookings found </label>
    }

    </div>
)}

PaymentList.propTypes = {
    bookings: arrayOf(shape({})).isRequired,
}

const mapStateToProps = state => ({bookings: state.bookings})

export default connect(mapStateToProps, {})(PaymentList)