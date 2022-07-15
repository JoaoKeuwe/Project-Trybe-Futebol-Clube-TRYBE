import { Request, Response, NextFunction } from 'express';
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
      const { username } = req.user;
      const service = new UserService();
      const roles = service.role(username);
      return res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
