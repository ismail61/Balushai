import Joi from 'joi'

const voucherValidation = ({
    name,
    start_from,
    end_time,
    code,
    voucher_setting,
    min_amount_to_apply,
    max_amount_to_apply,
    total_issued_voucher,
    limit_voucher_usage_for_customer
 }) => {
    const joiSchema = Joi.object().keys({
        name: Joi.string()
            .messages({
                "string.base": `Name should be type of String`
            }),
        start_from: Joi.date()
            .messages({
                "date.base": `Start From should be type of Date`
            }),
        end_time: Joi.date()
            .messages({
                "date.base": `End Time should be type of Date`
            }),
        code: Joi.string().max(12)
            .messages({
                "string.base": `Code should be type of String.`
            }),
        voucher_setting: Joi.object().keys({
            discount_type: Joi.string()
                .messages({
                    "string.base": `Discount Type should be type of String`
                }),
            discount_amount: Joi.number().required()
                .messages({
                    "number.base": `Discount Amount should be type of Number`
                }),
            discount_amount_percentage: Joi.number().required()
                .messages({
                    "number.base": `Discount Amount Percentage should be type of Number`,
                    "any.required": `Discount Amount Percentage is required`
                })
        }),
        min_amount_to_apply: Joi.number().required()
            .messages({
                "number.base": `Min Amount To Apply should be type of Number`,
                "any.required": `Min Amount To Apply is Required.`
            }),
        max_amount_to_apply: Joi.number().required()
            .messages({
                "number.base": `Max Amount To Apply should be type of Number`,
                "any.required": `Max Amount To Apply is Required.`
            }),
        total_issued_voucher: Joi.number().required()
            .messages({
                "number.base": `Total Issued Voucher should be type of Number`,
                "any.required": `Total Issued Voucher is Required.`
            }),
        limit_voucher_usage_for_customer: Joi.number().required()
            .messages({
                "number.base": `Limit Voucher Usage For Customer should be type of Number`,
                "any.required": `Limit Voucher Usage For Customer is Required.`
            }),
    })

    return { value, error } = joiSchema.validate({
        name,
        start_from,
        end_time,
        code,
        voucher_setting,
        min_amount_to_apply,
        max_amount_to_apply,
        total_issued_voucher,
        limit_voucher_usage_for_customer
    })
}

export { voucherValidation }