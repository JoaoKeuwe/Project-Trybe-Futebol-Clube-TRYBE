import { Request } from 'express';
import User from '../database/models/user';

export interface IRequest extends Request{
  user?: User

}
