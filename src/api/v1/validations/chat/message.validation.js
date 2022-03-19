import Joi from "joi"

const messageValidation = ({}) => {
    const joiSchema = Joi.object().keys({
        sender: Joi.string().valid('CUSTOMER', 'VENDOR').required()
            .messages({
                "string.base": `Sender should be type of String`,
                "any.required": `Sender is Required.`
            }),
        vendor_id: Joi.required()
            .messages({
                "any.required": `Vendor ID is Required.`
            }),
        customer_id: Joi.required()
            .messages({
                "any.required": `Customer ID is Required.`
            }),
        message: Joi.string().required()
            .messages({
                "string.base": `Message should be type of String`,
                "any.required": `Message is Required.`
            })
    })
}

export { messageValidation }