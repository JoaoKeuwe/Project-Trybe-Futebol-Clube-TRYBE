import { Request, Response } from 'express';
import MacthesServices from '../services/matches.services';

class MatchesController {
  constructor(private service = new MacthesServices()) {
    this.service = service;
  }

  async matcheslist(req: Request, res: Response) {
    const { inProgress } = req.query;
    let progressTeam = null;
    if (inProgress === 'false') progressTeam = false;
    if (inProgress === 'true') progressTeam = true;
    const matches = await this.service.findAll(progressTeam);
    return res.status(200).json(matches);
  }

  async matchesCreate(req: Request, res: Response) {
    const matches = await this.service.createMatch(req.body);
    return res.status(201).json(matches);
  }

  async patchUpdate(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.pathUpdate(id);

    return res.status(200).json({ message: 'Finished' });
  }

  async updateScore(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.service.updateScore(homeTeamGoals, awayTeamGoals, Number(id));

    return res.status(200).json({ message: 'atualizadoo!' });
  }
}

export default MatchesController;
