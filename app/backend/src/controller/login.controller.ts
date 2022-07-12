import { Request, Response } from 'express';
import UserService from '../services/login.services';

class UserController {
  static login(req:Request, res: Response) {
    const { email } = req.body;
    const loginService = new UserService();
    const token = loginService.login(email);
    return res.status(201).json({ token });
  }
}

export default UserController;
