import express from 'express';
import bodyParser from 'body-parser';
import { Bookings } from '../model/Bookings.js';
import { requireAuth } from '../middleware/AuthenticateUser.js'

const bookingRouter = express.Router();

bookingRouter.use(bodyParser.json());

bookingRouter.get('/',requireAuth, (req, res) => {
    try {
        const bookings = new Bookings();
        bookings.fetchBookings(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});


bookingRouter.get('/:id', (req, res) => {
    try {
        const bookings = new Bookings();
        bookings.fetchBooking(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch booking' });
    }
});


bookingRouter.post('/', (req, res) => {juk
    try {
        const bookings = new Bookings();
        bookings.createBooking(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});


bookingRouter.patch('/:id', (req, res) => {
    try {
        const bookings = new Bookings();
        bookings.updateBooking(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update booking' });
    }
});


bookingRouter.delete('/:id', (req, res) => {
    try {
        const bookings = new Bookings();
        bookings.deleteBooking(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete booking' });
    }
});


export {
    bookingRouter,
    requireAuth

};
