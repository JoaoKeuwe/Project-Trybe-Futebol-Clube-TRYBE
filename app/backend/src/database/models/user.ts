import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;
  role: string;
  email: string;
  password: string;
  username: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
