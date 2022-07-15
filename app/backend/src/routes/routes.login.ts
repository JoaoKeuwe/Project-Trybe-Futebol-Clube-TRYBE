import { Router } from 'express';
import { sendedEmail, emailValidation } from '../middlewares/validEmail';
import { validPassword, sendedPassword } from '../middlewares/validPassword';
import validationToken from '../middlewares/validToken';
import UserController from '../controller/login.controller';

const routeUser = Router();
routeUser.post(
  '/login',
  sendedEmail,
  sendedPassword,
  emailValidation,
  validPassword,

  new UserController().login,
);
routeUser.get(
  '/login/validate',
  validationToken,
  new UserController().loginValidate,
);
export default routeUser;
