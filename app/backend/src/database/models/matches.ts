import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

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
    type: STRING,
    allowNull: false,
  },
  homeTeamGoals: {
    type: STRING,
    allowNull: false,
  },
  awayTeam: {
    type: STRING,
    allowNull: false,
  },
  awayTeamGoals: {
    type: STRING,
    allowNull: false,
  },
  inProgress: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Matches',
  timestamps: false,
});

export default Matches;
