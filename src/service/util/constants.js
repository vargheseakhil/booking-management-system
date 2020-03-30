export const ACTIVE_BOOKING = 'ACTIVE_BOOKING';
export const FETCH_BOOKINGS_SUCCESS = "FETCH_BOOKINGS_SUCCESS";
export const UPDATE_BOOKING = 'UPDATE_BOOKING';
export const pagePlaceholders = {
    Request : {
        leftButton : 'Reschedule',
        rightButton : 'Accept Request',
        availableAt: 'This customer is available at:',
        statusLabel: 'Pending Request',
    },
    Service: {
        leftButton : 'Check In',
        rightButton : 'Generate Invoice',
        availableAt: `Check In here or scan customer's QR code to check in when the service is about to start:`,
        statusLabel: 'Upcoming Service',
    },
    Payment: {
        leftButton: 'Start a chat',
        rightButton: 'Resend Invoice',
        availableAt: 'Service is complete, Please confirm payment amount:',
        statusLabel: 'Pending Payment',
    },
    invoiceLabel: 'Invoice Item',
    sessionCost: 'Session Price',
}