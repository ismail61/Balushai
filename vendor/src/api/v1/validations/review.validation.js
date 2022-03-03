import Joi from 'joi';

const reviewValidation = ({ description, image, rating, reply, report, status }) => {
    const joiSchema = Joi.object().keys({
        description: Joi.string()
            .messages({
                "string.base": `Description should be type of String`
            }),
        image: Joi.array()
            .items({
                url: Joi.string()
                    .messages({
                        "string.base": `URL should be type of String`
                    })
                }),
        rating: Joi.number().required().min(1).max(5)
                .messages({
                    "number.base": `Rating should be type of Number`,
                    "any.required": `Rating is Required.`
                }),
        reply: Joi.object().keys({
            description: Joi.string().max(255)
                .messages({
                    "string.base": `Reply Description should be type of String`
                })
        }),
        report: Joi.string()
            .messages({
                "string.base": `Report should be type of String`
            }),
        status: Joi.string()
            .messages({
                "string.base": `Status should be type of Status`
            })
    })
    const { value, error } = joiSchema.validate({ description, image, rating, reply, report, status }, { escapeHtml: true })
    return { value, error }
}


export default { reviewValidation }