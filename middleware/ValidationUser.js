const { validationResult } = require('express-validator');

const validateBookingData = [
    check('serviceId').notEmpty().withMessage('Service ID is required'),
    check('userId').notEmpty().withMessage('User ID is required'),
    check('bookingDate').isDate({ format: 'YYYY-MM-DD' }).withMessage('Invalid booking date format'),
    check('startTime').matches(/^\d{2}:\d{2}$/).withMessage('Invalid start time format'),
    check('endTime').matches(/^\d{2}:\d{2}$/).withMessage('Invalid end time format'),
    // Additional validations as needed
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

app.post('/bookings', validateBookingData, (req, res) => {
    const { serviceId, userId, bookingDate, startTime, endTime } = req.body;
    // Create the booking in the database
    // Your database logic here...
    res.status(201).json({ message: 'Booking created successfully' });
});
