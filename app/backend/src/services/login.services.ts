import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../database/models/user';
import generateToken from '../middlewares/generateJWT';

class UserService {
  public model = User;
  constructor(model = User) {
    this.model = model;
  }

  async login(email: string) {
    const user = await this.model.findOne({ where: { email } });
    if (user) {
      const { id, username } = user;
      const token = generateToken({ id, username });
      return token;
    }
  }

  async role(token: string) {
    const JWT: string = process.env.JWT_SECRET || 'jwt_secret';
    const generateJWT = jwt.verify(token, JWT) as jwt.JwtPayload;
    const { password } = generateJWT.payload;
    const roles = await this.model.findOne(password);
    return roles;
  }
}
export default UserService;
