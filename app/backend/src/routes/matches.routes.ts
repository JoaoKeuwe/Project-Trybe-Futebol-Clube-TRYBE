import { Router } from 'express';
import UserController from '../controller/matches.controller';
import validationToken from '../middlewares/validToken';

const teamsRoutes = Router();
const userController = new UserController();

teamsRoutes.get('/', (req, res) => {
  userController.matcheslist(req, res);
});
teamsRoutes.post('/', validationToken, (req, res) => {
  userController.matchesCreate(req, res);
});
teamsRoutes.patch('/:id/finished', (req, res) => {
  userController.patchUpdate(req, res);
});

export default teamsRoutes;
