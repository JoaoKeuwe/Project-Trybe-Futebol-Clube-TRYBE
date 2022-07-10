import Joi from 'Joi'
 const validEmail = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })