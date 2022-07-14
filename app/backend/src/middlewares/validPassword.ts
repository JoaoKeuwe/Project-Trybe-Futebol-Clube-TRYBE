import { NextFunction, Request, Response } from 'express';

export const sendedPassword = (req: Request, res:Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export const validPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};
