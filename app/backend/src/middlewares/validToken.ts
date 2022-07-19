import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IRequest } from '../interfaces/request.interface';
import 'dotenv/config';

const validationToken = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const validToken = jwt
      .verify(authorization, process.env.JWT_SECRET || 'jwt_secret') as jwt.JwtPayload;
    const { data } = validToken;
    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
export default validationToken;
