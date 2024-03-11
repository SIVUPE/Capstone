import { connection as db } from "../config/index.js";


class Bookings {
    fetchBookings(req, res) {
        const qry = `
            SELECT bookingID, userID, serviceID, bookingDate, startTime, endTime
            FROM Bookings`;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }

    fetchBooking(req, res) {
        const qry = `
            SELECT bookingID, userID, serviceID, bookingDate, startTime, endTime
            FROM Bookings
            WHERE bookingID = ${req.params.id}`;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }

    createBooking(req, res) {
        const { userID, serviceID, bookingDate, startTime, endTime } = req.body;
        const qry = `
            INSERT INTO Bookings (userID, serviceID, bookingDate, startTime, endTime)
            VALUES (?, ?, ?, ?, ?)`;
        db.query(qry, [userID, serviceID, bookingDate, startTime, endTime], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New booking created',
            });
        });
    }

    updateBooking(req, res) {
        const { userID, serviceID, bookingDate, startTime, endTime } = req.body;
        const qry = `
            UPDATE Bookings
            SET userID = ?, serviceID = ?, bookingDate = ?, startTime = ?, endTime = ?
            WHERE bookingID = ${req.params.id}`;
        db.query(qry, [userID, serviceID, bookingDate, startTime, endTime], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Booking information updated.",
            });
        });
    }

    deleteBooking(req, res) {
        const qry = `
            DELETE FROM Bookings
            WHERE bookingID = ${req.params.id}`;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Booking deleted.",
            });
        });
    }
}

export {
    Bookings 
};
