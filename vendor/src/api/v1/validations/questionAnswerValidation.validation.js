import Joi from "joi";

const questionAnswerValidation = ({ user_mesage, reply_message }) => {
    const joiSchema = Joi.object().keys({
        user_mesage: Joi.string()
            .messages({
                "string.base": `User Message should be type of String`
            }),        
        reply_message: Joi.string()
            .messages({
                "string.base": `Reply Message should be type of String`
            }),        
    })

    const { value, error } = joiSchema.validate({ user_mesage, reply_message }, { escapeHtml: true })
    return { value, error }
}

export { questionAnswerValidation }