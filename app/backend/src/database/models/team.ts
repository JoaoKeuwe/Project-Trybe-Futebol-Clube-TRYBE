import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  static findTeam() {
    throw new Error('Method not implemented.');
  }

  public id!: number;
  public teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
