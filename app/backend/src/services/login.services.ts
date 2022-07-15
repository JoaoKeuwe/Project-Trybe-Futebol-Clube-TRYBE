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

  async role(id: number):Promise<string> {
    const userData = await this.model.findOne({ where: { id } });
    console.log(userData);

    if (!userData) {
      return (`User ${id} not found`);
    }
    const { role } = userData;
    return role;
  }
}
export default UserService;
