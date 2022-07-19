import { Router } from 'express';
import UserController from '../controller/matches.controller';
import validationToken from '../middlewares/validToken';
import validTeam from '../middlewares/validTeam';

const teamsRoutes = Router();
const userController = new UserController();

teamsRoutes.get('/', (req, res) => {
  userController.matcheslist(req, res);
});
teamsRoutes.post('/', validationToken, validTeam, (req, res) => {
  userController.matchesCreate(req, res);
});
teamsRoutes.patch('/:id/finish', (req, res) => {
  userController.patchUpdate(req, res);
});
teamsRoutes.patch('/:id', (req, res) => {
  userController.updateScore(req, res);
});

export default teamsRoutes;
