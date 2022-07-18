import { Router } from 'express';
import routeUser from './routes.login';
import teams from './teams.login';

const route = Router();

route.use('/login', routeUser);
route.use('/teams', teams);
export default route;
