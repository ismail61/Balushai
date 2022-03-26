import Joi from "joi"
const categoryValidation = ({
    name,
    description
}) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string().required()
            .messages({
                "string.base": `Name should be type of String`,
                "any.required": `Name is Required`
            }),
        description: Joi.string()
            .messages({
                "string.base": `Description should be type of String`
            }),
    })
    const { value, error } = joiSchema.validate({ name, description }, { escapeHtml: true })
    return { value, error }
}

export { categoryValidation }