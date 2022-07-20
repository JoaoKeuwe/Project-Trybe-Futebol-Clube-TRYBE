import 'dotenv/config';
import { ITeamModel } from '../interfaces/team.interface';
import Teams from '../database/models/team';
// import generateToken from '../middlewares/generateJWT';

class TeamServices implements ITeamModel {
  public model = Teams;
  constructor(model = Teams) {
    this.model = model;
  }

  async findTeam() {
    const teams = await this.model.findAll();

    return teams;
  }

  async findTeamId(id: string) {
    const team = await this.model.findOne({ where: { id } });

    return team;
  }

  findTeamsId = async (homeTeam: number, awayTeam: number) => {
    const idAwayTeam = await this.model.findOne({ where: { id: awayTeam } });
    const idHomeTeam = await this.model.findOne({ where: { id: homeTeam } });
    if (!idAwayTeam && !idHomeTeam) return [idAwayTeam, idHomeTeam];
    return [];
  };
}
export default TeamServices;
