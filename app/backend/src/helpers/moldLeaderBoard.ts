import { IMatches } from '../interfaces/matches.interface';
import { ILeaderboardTeams } from '../interfaces/leaderBoard.interface';

const calculate = (totalPoints: number, totalGames: number): number => {
  const result = (totalPoints / (totalGames * 3)) * 100;
  return result;
};

const totalOfMatches = (matches: IMatches[]):number[] => {
  let victory = 0;
  let lose = 0;
  let totalPoints = 0;
  let draws = 0;
  matches.forEach(({ homeTeamGoals, awayTeamGoals }: IMatches) => {
    if (homeTeamGoals > awayTeamGoals) { victory += 1; totalPoints += 3; }
    if (homeTeamGoals === awayTeamGoals) { draws += 1; totalPoints += 1; }
    if (homeTeamGoals < awayTeamGoals) { lose += 1; }
  });
  return [victory, draws, lose, totalPoints];
};

const totalGoals = (matches: IMatches[]): number[] => {
  const goals = matches
    .reduce((currMatch, nextMatch: IMatches) => currMatch + nextMatch.homeTeamGoals, 0);
  const goalsTaked = matches
    .reduce((currMatch, nextMatch: IMatches) => currMatch + nextMatch.awayTeamGoals, 0);
  const mediumGoals = goals - goalsTaked;
  return [goals, goalsTaked, mediumGoals];
};

const makeLeaderBoard = ({ teamName, matches }: ILeaderboardTeams) => {
  const [victoryHome, drawsHome, loseHome, totalPointsHome] = totalOfMatches(matches);
  const [goals, goalsTaked, goalsBalanceHome] = totalGoals(matches);
  const use = calculate(
    totalPointsHome,
    matches.length,
  );

  return {
    name: teamName,
    totalPoints: totalPointsHome,
    totalGames: matches.length,
    totalVictories: victoryHome,
    totalDraws: drawsHome,
    totalLosses: loseHome,
    goalsFavor: goals,
    goalsOwn: goalsTaked,
    goalsBalance: goalsBalanceHome,
    efficiency: Number(use.toFixed(2)),
  };
};

export default makeLeaderBoard;
