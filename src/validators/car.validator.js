import Joi from "joi";

const carValidato = Joi.object({
    model:Joi.string().regex(/^[A-Za-zА-яїйЙіЇІгГєЄ]{1,20}$/).required().messages({'string.pattern.base':'тільки букви від 1 до 20'}),
    price:Joi.number().min(1).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()

})

export {carValidato}