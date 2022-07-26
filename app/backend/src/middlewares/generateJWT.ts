import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

interface IUser {
  id?: number;
  username: string;

}
function generateJWT(payload: IUser) {
  const secret = process.env.JWT_SECRET || 'jwt_secret';
  const jwtConfig:object = {
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
}

export default generateJWT;
