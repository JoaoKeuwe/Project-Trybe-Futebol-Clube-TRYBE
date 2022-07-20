import Model from '../database/models/matches';
import { IMatches } from '../interfaces/matches.interface';
import modelTeams from '../database/models/team';

class MacthesServices {
  constructor(private model = Model) {
    this.model = model;
  }

  findAll = async (inProgress: boolean | null): Promise<IMatches[] | null> => {
    let matches;

    if (inProgress === null) {
      matches = await this.model.findAll({ include: [
        { model: modelTeams, as: 'teamAway', attributes: { exclude: ['id'] } },
        { model: modelTeams, as: 'teamHome', attributes: { exclude: ['id'] } },
      ] });
    } else {
      matches = await this.model.findAll({ where: { inProgress },
        include: [
          { model: modelTeams, as: 'teamAway', attributes: { exclude: ['id'] } },
          { model: modelTeams, as: 'teamHome', attributes: { exclude: ['id'] } },
        ] });
    }
    return matches as unknown as IMatches[];
  };

  createMatch = async (matches: IMatches): Promise<IMatches> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = matches;

    const match = await this.model.create({
      awayTeam,
      awayTeamGoals,
      homeTeam,
      inProgress: true,
      homeTeamGoals,
    });

    return match as unknown as IMatches;
  };

  pathUpdate = async (id: string) => {
    const match = await this.model.update({ inProgress: false }, { where: { id } });

    return match;
  };

  updateScore = async (homeTeamGoals: number, awayTeamGoals: number, id: string) => {
    const updateScore = await this.model.update({
      awayTeamGoals,
      homeTeamGoals,
    }, { where: { id } });

    return updateScore;
  };
}

export default MacthesServices;
