import { Request, Response } from 'express';
// import User from '../database/models/user';
// import { IRequest } from '../interfaces/request.interface';
import TeamServices from '../services/team.services';

class UserController {
  public teams = async (_req: Request, res: Response) => {
    const teamServices = new TeamServices();
    const teams = await teamServices.findTeam();
    return res.status(200).json(teams);
  };

  public findTeamId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teamServices = new TeamServices();
    const teams = await teamServices.findTeam(id);
    return res.status(200).json(teams);
  }
}

export default UserController;
