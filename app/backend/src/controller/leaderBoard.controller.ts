import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoard.services';

export default class LeaderController {
  private leaderBoardService: LeaderBoardService;

  constructor(service = new LeaderBoardService()) {
    this.leaderBoardService = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this.leaderBoardService.getAllHome();
    return res.status(200).json(data);
  };
}
