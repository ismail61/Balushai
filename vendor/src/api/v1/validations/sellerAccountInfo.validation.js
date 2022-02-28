import Joi from "joi"
const sellerAccountInfoValidation = ({ name , phone}) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string()
            .messages({
                "string.base": `Bank Name  should be a type of String`,
            }),
        phone: Joi.string().regex(/(^(\+8801|8801|01|008801))[1|5-9]{1}(\d){8}$/).required()
            .messages({
                "string.pattern.base": `Please Enter the Valid BD Phone number! `,
                "any.required": `Phone is Required.`,
            }),
    })
    const { value, error } = joiSchema.validate({ name,phone }, { escapeHtml: true })
    return { value, error }
}

export { sellerAccountInfoValidation }