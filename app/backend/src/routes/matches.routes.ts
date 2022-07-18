import { Router } from 'express';
import UserController from '../controller/matches.controller';

const teamsRoutes = Router();
const userController = new UserController();

teamsRoutes.get('/', (req, res) => {
  userController.matcheslist(req, res);
});

export default teamsRoutes;
