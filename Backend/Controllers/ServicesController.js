import express from 'express';
import bodyParser from 'body-parser';
import { services } from '../model/index.js';

const serviceRouter = express.Router();

serviceRouter.get('/', (req, res) => {
    try {
        services.fetchServices(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve services'
        });
    }
});

serviceRouter.get('/:id', (req, res) => {
    try {
        services.fetchService(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve service'
        });
    }
});

serviceRouter.post('/addService', bodyParser.json(), (req, res) => {
    try {
        services.addService(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new service'
        });
    }
});

serviceRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        services.updateService(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update a service'
        });
    }
});

serviceRouter.delete('/delete/:id', (req, res) => {
    try {
        services.deleteService(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a service'
        });
    }
});

export { 
    serviceRouter
}
