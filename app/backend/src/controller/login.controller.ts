import { Request, Response } from 'express';
import UserService from '../services/login.services';

class UserController {
  login = async (req:Request, res: Response) => {
    const { email } = req.body;
    const loginService = new UserService();
    const token = await loginService.login(email);
    return res.status(200).json({ token });
  };
}

export default UserController;
