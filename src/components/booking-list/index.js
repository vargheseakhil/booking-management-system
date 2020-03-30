import React from 'react'
import { func, shape, arrayOf, string } from 'prop-types'
import BookingItem from './booking-item'
import './index.css'

const BookingList = ({bookings, handleUpdate, pageName}) => {
    return (
    <div className="booking-list" >
    {bookings.length ?
    <ul className="booking-list-ul">
        { bookings.map(booking => {
            return (
                <li key={booking.id} >
                    <BookingItem item={booking} handleUpdate={handleUpdate} pageName={pageName}/>
                </li>
            )
        }) 
        }
    </ul> : null
    }
    </div>
)}

BookingList.propTypes = {
    bookings: arrayOf(shape({})).isRequired,
    handleUpdate: func,
    pageName: string.isRequired,
}

BookingList.defaultProps = {
    handleUpdate: x => x
}

export default BookingList;