import { Request, Response } from 'express';

class LoginController {
  static login(req:Request, res: Response) {
    return res.json({ okay: true });
  }
}

export default LoginController;
