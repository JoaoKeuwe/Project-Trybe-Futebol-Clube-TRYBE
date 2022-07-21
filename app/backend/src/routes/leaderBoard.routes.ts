import { Router } from 'express';
import LeaderBoardController from '../controller/leaderBoard.controller';

const leaderBoardRoutes = Router();
const leaderBoardController = new LeaderBoardController();

leaderBoardRoutes.get('/home', (req, res) => {
  leaderBoardController.getAll(req, res);
});

export default leaderBoardRoutes;
