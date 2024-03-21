import { connection as db } from "../config/index.js";

class Services {
    fetchServices(req, res) {
        const qry = `
            SELECT serviceID, serviceName, serviceDescription, servicesUrl, price, createdAt, updatedAt
            FROM Services`;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }

    fetchService(req, res) {
        const qry = `
            SELECT serviceID, serviceName, serviceDescription, servicesUrl, price, createdAt, updatedAt
            FROM Services
            WHERE serviceID = ${req.params.id}`;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }

    addService(req, res) {
        const { serviceName, serviceDescription, price } = req.body;
        const qry = `
            INSERT INTO Services (serviceName, serviceDescription, price) 
            VALUES (?, ?, ?)`;
        db.query(qry, [serviceName, serviceDescription, price], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New service was added',
            });
        });
    }

     async updateService(req, res) {
    const qry = `
    UPDATE Services 
    SET ?
    WHERE serviceID = ${req.params.id};`;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "services updated",
      });
    });
  }

    deleteService(req, res) {
        const qry = `
            DELETE FROM Services
            WHERE serviceID = ${req.params.id}`;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The service information has been deleted.",
            });
        });
    }
}

export { Services };
