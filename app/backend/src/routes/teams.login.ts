import { Router } from 'express';
import UserController from '../controller/teams.controller';

const teamsRoutes = Router();
const userController = new UserController();

teamsRoutes.get(
  '/teams', (
    userController.teams
  ),
);
teamsRoutes.get(
  '/teams:id', (
    userController.teams
  ),
);

export default teamsRoutes;
