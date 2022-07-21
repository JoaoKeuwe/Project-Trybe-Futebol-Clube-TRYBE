import { ILeaderBoard, ILeaderboardTeams } from '../interfaces/leaderBoard.interface';
import { IMatches } from '../interfaces/matches.interface';
import Match from '../database/models/matches';
import Team from '../database/models/team';

export default class LeaderBoardService {
  constructor(private model = Team) { this.model = model; }

  public orderLeaderboard = (a: ILeaderBoard, b:ILeaderBoard) => {
    // Referência para o código: https://www.reddit.com/r/CodingHelp/comments/ttmead/javascript_sort_an_array_with_multiple_keys/

    if (a.totalPoints < b.totalPoints) { return 1; }
    if (a.totalPoints > b.totalPoints) { return -1; }
    if (a.totalVictories < b.totalVictories) { return 1; }
    if (a.totalVictories > b.totalVictories) { return -1; }
    if (a.goalsBalance < b.goalsBalance) { return 1; }
    if (a.goalsBalance > b.goalsBalance) { return -1; }
    if (a.goalsFavor < b.goalsFavor) { return 1; }
    if (a.goalsFavor > b.goalsFavor) { return -1; }
    if (a.goalsOwn < b.goalsOwn) { return 1; }
    if (a.goalsOwn > b.goalsOwn) { return -1; }
    return 0;
  };

  public calcEfficiency = (totalPoints: number, totalGames: number): number => {
    const result = (totalPoints / (totalGames * 3)) * 100;
    return result;
  };

  public goals = (matches: IMatches[]): number[] => {
    const goals = matches
      .reduce((current, { homeTeamGoals }: IMatches) => current + homeTeamGoals, 0);

    const goalsTaked = matches
      .reduce((current, { awayTeamGoals }: IMatches) => current + awayTeamGoals, 0);

    const mediumOfGoals = goals - goalsTaked;

    return [goals, goalsTaked, mediumOfGoals];
  };

  public moldLeaderboard = ({ teamName, matches }: ILeaderboardTeams) => {
    // console.log(matches, 'fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd');
    const [vicHome, drawsHome, lossesHome, pointsHome] = this.totalResultsMatches(matches);

    const [goalsFavorHome, goalsOwnHome, goalsBalanceHome] = this.goals(matches);

    const efficiency = this.calcEfficiency(pointsHome, matches.length);

    return {
      name: teamName,
      totalPoints: pointsHome,
      totalGames: matches.length,
      totalVictories: vicHome,
      totalDraws: drawsHome,
      totalLosses: lossesHome,
      goalsFavor: goalsFavorHome,
      goalsOwn: goalsOwnHome,
      goalsBalance: goalsBalanceHome,
      efficiency: Number(efficiency.toFixed(2)),
    };
  };

  public totalOfVictories = (homeTeamGoals: number, awayTeamGoals: number) => {
    let victory = 0;
    let victoryPoints = 0;

    if (homeTeamGoals > awayTeamGoals) { victory += 1; victoryPoints += 3; }
    return [victory, victoryPoints];
  };

  public countDraws = (homeTeamGoals: number, awayTeamGoals: number) => {
    let draws = 0;
    let drawsPoints = 0;

    if (homeTeamGoals === awayTeamGoals) { draws += 1; drawsPoints += 1; }
    return [draws, drawsPoints];
  };

  public countLosses = (homeTeamGoals: number, awayTeamGoals: number) => {
    let loses = 0;
    if (homeTeamGoals < awayTeamGoals) { loses += 1; }
    return loses;
  };

  public totalResultsMatches = (matchs: IMatches[]) :number[] => {
    let losses = 0;
    let draws = 0;
    let victories = 0;
    let totalPoints = 0;

    // console.log(matchs, 'kakakakakakakakakkakakakakkakakaka');
    matchs.forEach(({ homeTeamGoals, awayTeamGoals }: IMatches) => {
      const [vicCounted, vicPoints] = this.totalOfVictories(homeTeamGoals, awayTeamGoals);
      const [drawsCounted, drawsPoints] = this.countDraws(homeTeamGoals, awayTeamGoals);
      const lossesCounted = this.countLosses(homeTeamGoals, awayTeamGoals);
      console.log(vicPoints, drawsPoints, 'textinhahshsjhwjhlqwudhil');
      totalPoints = vicPoints + drawsPoints;
      losses = lossesCounted;
      draws = drawsCounted;
      victories = vicCounted;
    });

    return [victories, draws, losses, totalPoints];
  };

  public async getAllHome() {
    const dataMatch = await this.model.findAll({
      include: [
        { model: Match, as: 'matches', where: { inProgress: false } },
      ] });
    const leaderboard = dataMatch as unknown as ILeaderboardTeams[];
    // console.log(leaderboard, 'lslsllslsllslss');
    // return leaderboard;

    const allTeams = leaderboard.map(this.moldLeaderboard);

    return allTeams.sort(this.orderLeaderboard);
  }
}
