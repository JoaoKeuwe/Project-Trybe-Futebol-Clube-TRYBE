import { IMatches } from './matches.interface';

export interface ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface ILeaderboardTeams {
  id: number;
  teamName: string;
  matches: IMatches[];
  matchesAway: IMatches[]
}
