import Joi from 'joi'

const brandValidation = async ({
    name, 
    slug,
    description,
    published
}) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string().required()
            .messages({
                "string.base": `Brand Name should be type of String`,
                "any.required": `Brand Name is Required.`
            }),
            slug: Joi.string().required()
            .messages({
                "string.base": `Slug should be type of String`,
                "any.required": `Slug is Required.`
            }),
            description: Joi.string()
                .messages({
                    "string.base": `Description should be type of String`
                }),
            published: Joi.boolean()
                .messages({
                    "boolean.base": `Published should be type of boolean`
            })
    })

    return { value, error } = joiSchema.validate({
        name, 
        slug,
        description,
        published
    }, { escapeHtml: true })
}

export { brandValidation }