import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

// describe('Seu teste', () => {
//   it('é chamado metodo "status" passando o codigo 200', async () => {
//     await productsController.getAll(req, res)
//     expect(res.status.calledWith(200)).to.be.equal(true); 
// })
// });
