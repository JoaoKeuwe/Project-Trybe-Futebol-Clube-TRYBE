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
}

export default TeamServices;
