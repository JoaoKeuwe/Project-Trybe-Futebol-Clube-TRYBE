export interface ITeams {
  id?: number;
  teamName: string;
}
export interface ITeamModel {
  findTeam(): Promise<ITeams[] | null>;
}
