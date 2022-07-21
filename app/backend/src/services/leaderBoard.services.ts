import Match from '../database/models/matches';
import Team from '../database/models/team';
import { ILeaderboardTeams } from '../interfaces/leaderBoard.interface';
import moldLeaderboard from '../helpers/moldLeaderBoard';
import orderLeaderboard from '../helpers/orderLeaderBoard';

export default class LeaderService {
  constructor(private model = Team) { this.model = model; }

  // Seria melhor fazer metodo pra tudo isso?
  // O que dá pra melhorar?

  public async getAll() {
    const dataMatch = await this.model.findAll({
      include: [
        { model: Match, as: 'matches', where: { inProgress: 0 } },
        // { model: Match, as: 'matchesAway', where: { inProgress: 0 } },
      ] });
    const leaderboard = dataMatch as unknown as ILeaderboardTeams[];

    const allTeams = leaderboard.map(moldLeaderboard);
    // Referência para o código: https://www.reddit.com/r/CodingHelp/comments/ttmead/javascript_sort_an_array_with_multiple_keys/

    return allTeams.sort(orderLeaderboard);
  }
}
