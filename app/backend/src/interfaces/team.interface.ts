export interface ITeams {
  id?: number;
  teamName: string;
}
export interface ITeamModel {
  findAll(): Promise<ITeams[] | null>;
  findTeam(): Promise<ITeams[] | null>;
  findTeamId(id: string): Promise<ITeams | null>;
}
