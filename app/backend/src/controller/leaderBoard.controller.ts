import { Request, Response } from 'express';
import LeaderBoardServices from '../services/leaderBoard.services';

export default class LeaderBoardController {
  private leaderBoardService: LeaderBoardServices;

  constructor(service = new LeaderBoardServices()) {
    this.leaderBoardService = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this.leaderBoardService.getAll();
    return res.status(200).json(data);
  };
}
