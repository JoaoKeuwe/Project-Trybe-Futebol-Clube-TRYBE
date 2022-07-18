export interface IMatches {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}
// export interface IMatcheslist {
//   listMatches(): Promise<IMatches[] | null>;
// }
// export interface IMatchModel {
//   findAll(inProgress: boolean | null): Promise<IMatches[] | null>;
//   matchCreate(match: IMatches): Promise<IMatches>;
//   patchUpdate(id: string): Promise<unknown>;
//   updateScore(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
// }
// export interface IMatchesService {
//   findAll(inProgress: boolean | null): Promise<IMatches[] | null>;
//   // matchesUpdate(match: IMatches): Promise<IMatches>;
//   // patchUpdate(id: string): Promise<unknown>;
//   // updateScore(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
// }
