import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  static errorTeam() {
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
  underscored: true,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
