import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user';
import { IRequest } from '../interfaces/request.interface';
import UserService from '../services/login.services';

class UserController {
  public login = async (req:Request, res: Response) => {
    const { email } = req.body;
    const loginService = new UserService();
    const token = await loginService.login(email);
    return res.status(200).json({ token });
  };

  public loginValidate = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user as User;
      console.log(user);
      const service = new UserService();
      const role = await service.role(user.id);
      console.log(role);

      return res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
