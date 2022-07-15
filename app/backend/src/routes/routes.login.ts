import { Router } from 'express';
import { sendedEmail, emailValidation } from '../middlewares/validEmail';
import { validPassword, sendedPassword } from '../middlewares/validPassword';
import validationToken from '../middlewares/validToken';
import UserController from '../controller/login.controller';

const routeUser = Router();
const userController = new UserController();
routeUser.post(
  '/',
  sendedEmail,
  sendedPassword,
  emailValidation,
  validPassword,
  userController.login,
);
routeUser.get(
  '/validate',
  validationToken,
  userController.loginValidate,
);
export default routeUser;
