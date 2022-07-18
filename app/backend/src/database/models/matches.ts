import { Model, INTEGER } from 'sequelize';
import db from '.';
import team from './team';

class Matches extends Model {
  id: number;
  teamName: string;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'Matches',
  timestamps: false,
});
Matches.belongsTo(team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(team, { foreignKey: 'awayTeam', as: 'teamAway' }); // fazendo  relacionamento de tabelas

export default Matches;
