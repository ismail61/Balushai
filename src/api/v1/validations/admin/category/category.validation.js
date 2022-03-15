import Joi from "joi"
const categoryValidation = ({
    name,
    description,
    image,
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
        image: Joi.object().keys({
            url: Joi.string()
                .messages({
                    "string.base": `Image Url should be type of String`
                }),
            public_id: Joi.string()
                .messages({
                    "string.base": `Public Id should be type of String`,
                })
        })
    })
    const { value, error } = joiSchema.validate({ name, description, image }, { escapeHtml: true })
    return { value, error }
}

export { categoryValidation }