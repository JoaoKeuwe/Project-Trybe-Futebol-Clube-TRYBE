import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken' 
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('TDD 5%', () => {

  let chaiHttpResponse: Response;
  let attributes = {
    id: 0,
    username: 'joaok',
    email: 'joao@hotmail.com',
    password: 'joaok'
  } as User
  const tokenGenerate = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIn0sImlhdCI6MTY1NzY3MDEzNn0.0qO0tvP1AQ8tnaSV00C-9qrqOC4mNPE-rKep4vcXojs"
  }
  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(attributes);
      sinon
      .stub(jwt, "sign")
      .resolves(tokenGenerate.token);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
    (jwt.sign as sinon.SinonStub).restore();
  })

  it('testando se tem token valido, status 200', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
        "email": "admin@admin.com",
        "password": "B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
      })
      console.log(chaiHttpResponse);
      
    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body.token).to.equal(tokenGenerate.token)
    expect(chaiHttpResponse.ok).to.equal(true)
    expect(chaiHttpResponse.info).to.equal(false)
    
  });

});