import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яїЇєЄйЙіІгГ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви,(1-20) символів'
    }),
    price:Joi.number().max(1000000).min(0).required().messages({
        'number.pattern.base':'Від 0 до 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'date.pattern.base':'Від 1990р. до сьогодні'
    })
})

export {carValidator}