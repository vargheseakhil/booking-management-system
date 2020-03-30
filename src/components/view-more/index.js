import React from 'react'
import { arrayOf,shape, string, func, number } from 'prop-types';
import { getBookingsByType } from '../../service/util/bookings';

const ViewMore = ({bookings, clickHandler, endIndex , bookingType}) => {
  const totalBookingByType = getBookingsByType(bookingType, bookings)
  return (
    <div>
    { totalBookingByType.length > endIndex ?
    <button className="view_more"onClick={() => clickHandler(endIndex+5)}>View more</button> :
    <div className="view_more grey bold">No more bookings to show </div> }
    </div>
  )
}

ViewMore.propTypes = {
    bookings: arrayOf(shape({})).isRequired,
    clickHandler: func.isRequired,
    endIndex: number.isRequired,
    bookingType: string.isRequired,
}
export default ViewMore