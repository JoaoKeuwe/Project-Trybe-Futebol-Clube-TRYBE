import 'dotenv/config';
import Teams from '../database/models/team';
// import generateToken from '../middlewares/generateJWT';

class TeamServices {
  public model = Teams;
  constructor(model = Teams) {
    this.model = model;
  }

  async findTeam() {
    const teams = await this.model.findTeam();

    return teams;
  }

  async findTeamId(id: string) {
    const team = await this.model.findTeam(id);
    return team;
  }
}
export default TeamServices;