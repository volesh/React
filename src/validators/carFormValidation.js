import Joi from "joi";

let carValidator = Joi.object({
    model:Joi.string().regex(/^[A-Za-zА-яїйЙіЇІгГєЄ]{1,20}$/).required().messages({'string.pattern.base':'тільки букви від 1 до 20'}),
    price:Joi.number().max(1000000).min(1).required().messages({'string.pattern.base':'Від 1 до 1000000'}),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({'string.pattern.base':'Від 1990 до сьогодні'})
})

export {carValidator}
