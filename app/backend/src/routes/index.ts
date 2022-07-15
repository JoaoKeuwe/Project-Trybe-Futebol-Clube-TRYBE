import { Router } from 'express';
import routeUser from './routes.login';

const route = Router();

route.use('/login', routeUser);
export default route;
