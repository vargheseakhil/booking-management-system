
const getBookingsByType = (type, bookings =[]) => {
    return bookings.filter((booking) => booking.status === type)
}

const getBookingsByCount = (type, bookings =[], endIndex) => {
    return bookings.filter((booking) => booking.status === type).splice(0, endIndex)
}

const updateBookingsById = (id , bookings = [], status) => {
      bookings.forEach((booking) => {
      if (booking.id === id) booking.status = status
      })
      return bookings
}

const getBookingsUrl = `https://my-json-server.typicode.com/vargheseakhil/bookings-list/db`

export { 
    getBookingsByType,
    getBookingsUrl,
    updateBookingsById,
    getBookingsByCount,
}