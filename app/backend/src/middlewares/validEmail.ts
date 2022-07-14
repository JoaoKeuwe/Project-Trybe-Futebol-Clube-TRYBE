import { NextFunction, Request, Response } from 'express';

const validEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

export const sendedEmail = (req:Request, res:Response, next:NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export const emailValidation = (req:Request, res:Response, next:NextFunction) => {
  const { email } = req.body;
  if (!validEmail.test(email) || email.includes('xablau')) {
    return res.status(401)
      .json({ message: 'Incorrect email or password' });
  }
  next();
};
