import { Request, Response, NextFunction } from 'express';
import UserService from '../services/login.services';

class UserController {
  login = async (req:Request, res: Response) => {
    const { email } = req.body;
    const loginService = new UserService();
    const token = await loginService.login(email);
    return res.status(200).json({ token });
  };

  loginValidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      const service = new UserService();
      const roles = service.role(authorization);
      return res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
