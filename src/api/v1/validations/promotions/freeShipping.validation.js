import Joi from 'joi'

const freeShippingValidation = ({ name, period, condition, regions }) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string()
            .messages({
                "string.base": `Name should be type of String`
            }),
        period: Joi.object().keys({
            period_type: Joi.string()
                .messages({
                    "string.base": `Name should be type of String`
                }),
            specific_period: Joi.object().keys({
                start_date: Joi.date.required()
                    .messages({
                        "date.base": `Start Date should be type of Date`,
                        "any.required": `Start Date is Required.`
                    }),
                end_date: Joi.date.required()
                    .messages({
                        "date.base": `Start Date should be type of Date`,
                        "any.required": `Start Date is Required.`
                    }),
                    
            })
        }),
        condition: Joi.object().keys({
            condition_type: Joi.string()
                .messages({
                    "string.base": `Condition Type should be type of String`
                }),
            quantity: Joi.number().required()
                .messages({
                    "number.base": `Quantity should be type of Number`,
                    "any.required": `Quantity is required`
                }),
            amount: Joi.number().required()
                .messages({
                    "number.base": `Amount should be type of Number`,
                    "any.required": `Amount is required`
                })
                
        }),
        regions: Joi.object().keys({
            region_type: Joi.string()
                .messages({
                    "string.base": `Region Type should be type of String`
                }),
            region: Joi.array()
                .items(Joi.string()
                    .messages({
                        "string.base": `Region Items should be type of String`
                    })
                )
        }),
    })

    return { value, error } = joiSchema.validate({ name, period, condition, regions })
}

export { freeShippingValidation }