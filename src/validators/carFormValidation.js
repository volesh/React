import Joi from "joi";

let carValidator = Joi.object({
    model:Joi.string().regex(/^[A-Za-zА-яїйЙіЇІгГєЄ]{1,20}$/).required(),
    price:Joi.number().max(1000000).min(1).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}
