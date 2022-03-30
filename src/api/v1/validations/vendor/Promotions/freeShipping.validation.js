import Joi from "joi";

const freeShippingValidation = ({
    name,
    period_type,
    specific_period,
    condition_type,
    quantity,
    amount,
    region_type,
    regions,
}) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string().required().messages({
            "string.base": `Name should be type of String`,
            "any.required": `Name is Required.`,
        }),
        period_type: Joi.string().messages({
            "string.base": `Period Type should be type of String`,
        }),
        specific_period: Joi.object()
            .keys({
                start_date: Joi.date.required().messages({
                    "date.base": `Start Date should be type of Date`,
                    "any.required": `Start Date is Required.`,
                }),
                end_date: Joi.date.required().messages({
                    "date.base": `Start Date should be type of Date`,
                    "any.required": `Start Date is Required.`,
                }),
            })
            .required()
            .messages({
                "any.required": `Specific Period is Required.`,
            }),
        condition_type: Joi.string().messages({
            "string.base": `Condition Type should be type of String`,
        }),
        quantity: Joi.alternatives()
            .conditional("condition_type", {
                is: "SHOP_ITEM_QUANTITY_ABOVE",
                then: Joi.number().required(),
            })
            .messages({
                "number.base": `Quantity should be type of Number`,
                "any.required": `Quantity is required`,
            }),
        amount: Joi.alternatives()
            .conditional("condition_type", {
                is: "SHOP_ORDER_AMOUNT_ABOVE",
                then: Joi.number().required(),
            })
            .messages({
                "number.base": `Amount should be type of Number`,
                "any.required": `Amount is required`,
            }),
        region_type: Joi.string().messages({
            "string.base": `Region Type should be type of String`,
        }),
        regions: Joi.array().items(
            Joi.alternatives()
                .conditional("region_type", {
                    is: "SPECIFIC_REGIONS",
                    then: Joi.string().required(),
                })
                .messages({
                    "string.base": `Region Items should be type of String`,
                })
        ),
    });

    const { value, error } = joiSchema.validate({
        name,
        period_type,
        specific_period,
        condition_type,
        quantity,
        amount,
        region_type,
        regions,
    });
    return { value, error };
};

export { freeShippingValidation };
