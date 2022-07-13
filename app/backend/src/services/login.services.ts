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
}
export default UserService;