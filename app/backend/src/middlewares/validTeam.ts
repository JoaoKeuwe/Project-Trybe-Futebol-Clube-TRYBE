import { Request, Response, NextFunction } from 'express';
import TeamRepository from '../services/team.services';

const teams = new TeamRepository();

const validTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const matchs = await teams.findTeamsId(homeTeam, awayTeam);

  if (homeTeam === awayTeam) {
    return res
      .status(401).json({ message: 'It is not possible to create a match with two equal teams' });
  }

  if (matchs?.length !== 2) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default validTeam;
