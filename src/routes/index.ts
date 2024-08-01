import express from 'express';
import employeeRouter from './Demo.routes';
const routes = express.Router();
 
routes.use('/', employeeRouter)

export default routes;