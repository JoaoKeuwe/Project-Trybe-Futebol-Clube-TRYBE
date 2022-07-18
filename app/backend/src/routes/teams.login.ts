import { Router } from 'express';
import UserController from '../controller/teams.controller';

const teamsRoutes = Router();
const userController = new UserController();

teamsRoutes.get('/', (req, res) => {
  userController.teams(req, res);
});

export default teamsRoutes;
