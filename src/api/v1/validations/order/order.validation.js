import Joi from "joi";

const orderValidation = ({ 
    product,
    total_price,
    shipment_fee,
    seller_discount,
    total,
    payment_information,
    billing_address,
    shipment_address,
    user_order_status,
    vendor_order_status,
    provider,
    tracking_number,
    invoice_number,
    estimate_delivery_time,
    delivered_time,
    printed,
    cancellation_reasons,
    refunds
}) => {
    const joiSchema = Joi.object().keys({
        product: Joi.object().keys({
            quantity: Joi.number().required()
                .messages({
                    "number.base": `Quantity should be type of Number`,
                    "number.max": `Quantity must be less than 5`,
                    "any.required": `Quantity is Required.`
                }),
            price: Joi.number().required()
                .messages({
                    "number.base": `Price should be type of Number`,
                    "any.required": `Price is Required.`
                }),
        }),
        total_price: Joi.number().required()
            .messages({
                "number.base": `Total Price should be type of Number`,
                "any.required": `Total Price is Required.`
            }),
        
        // voucher_code: Joi.string()
        //     .messages({
        //         "string.base": `Voucher Code should be type of String`
        //     }),
        shipment_fee: Joi.number().required()
            .messages({
                "number.base": `Shipment Fee should be type of Number`,
                "any.required": `Shipment Fee is Required.`
            }),
        seller_discount: Joi.number()
            .messages({
                "number.base": `Seller Discount should be type of Number`
            }),
        total: Joi.number().required()
            .messages({
                "number.base": `Total should be type of Number`,
                "any.required": `Total is Required.`
            }),
        payment_information: Joi.object().keys({
            amount: Joi.number().required()
                .messages({
                    "number.base": `Amount should be type of Number`,
                    "any.required": `Amount is Required.`
                }),
            method: Joi.string().required()
                .messages({
                    "string.base": `Method should be type of String`,
                    "any.required": `Method is Required.`
                }),
            status: Joi.string()
                .messages({
                    "string.base": `Status should be type of String`,
                }),
            /*   card: Joi.object().keys({
                brand: Joi.string()
                    .messages({
                        "string.base": `Brand should be type of String`
                    }),
                number: Joi.number()
                    .messages({
                        "number.base": `Number should be type of Number`
                    }),
                expirationMonth: Joi.number()
                    .messages({
                        "number.base": `Expiration Month should be type of Number`
                    }),
                expirationYear: Joi.number()
                    .messages({
                        "number.base": `Expiration Year should be type of Number`
                    }),
                cvv: Joi.number()
                    .messages({
                        "number.base": `CVV should be type of Number`
                    }),
            }) */
        }),
        billing_address: Joi.object().keys({
            full_name: Joi.string().required()
                .messages({
                    "string.base": `Full Name should be type of String`,
                    "any.required": `Full Name is Required.`
                }),
            phone_number: Joi.string().regex(/(^(\+8801|8801|01|008801))[1|5-9]{1}(\d){8}$/)
                .messages({
                    "string.pattern.base": `Please Enter the Valid BD Phone number! `,
                }),
            region: Joi.string().required()
                .messages({
                    "string.base": `Region should be type of String`,
                    "any.required": `Region is Required.`
                }),
            city: Joi.string().required()
                .messages({
                    "string.base": `City should be type of String`,
                    "any.required": `City is Required.`
                }),
            area: Joi.string().required()
                .messages({
                    "string.base": `Area should be type of String`,
                    "any.required": `Area is Required.`
                }),
            address: Joi.string().required()
                .messages({
                    "string.base": `Address should be type of String`,
                    "any.required": `Address is Required.`
                }),
            effective_delivery_label: Joi.string()
                .messages({
                    "string.base": `Effective Delivery Label should be type of String`
                })
        }),
        shipment_address: Joi.object().keys({
            full_name: Joi.string().required()
                .messages({
                    "string.base": `Full Name should be type of String`,
                    "any.required": `Full Name is Required.`
                }),
            phone_number: Joi.string().regex(/(^(\+8801|8801|01|008801))[1|5-9]{1}(\d){8}$/)
                .messages({
                    "string.pattern.base": `Please Enter the Valid BD Phone number! `,
                }),
            region: Joi.string().required()
                .messages({
                    "string.base": `Region should be type of String`,
                    "any.required": `Region is Required.`
                }),
            city: Joi.string().required()
                .messages({
                    "string.base": `City should be type of String`,
                    "any.required": `City is Required.`
                }),
            area: Joi.string().required()
                .messages({
                    "string.base": `Area should be type of String`,
                    "any.required": `Area is Required.`
                }),
            address: Joi.string().required()
                .messages({
                    "string.base": `Address should be type of String`,
                    "any.required": `Address is Required.`
                }),
            effective_delivery_label: Joi.string()
                .messages({
                    "string.base": `Effective Delivery Label should be type of String`
                })
        }),
        user_order_status: Joi.string().valid('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED', 'RETURNED', 'DELIVERY_FAILED')
            .messages({
                "string.base": `User Order Status should be type of String`
            }),
        
        vendor_order_status: Joi.string().valid('PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED', 'DELIVERY_FAILED')
            .messages({
                "string.base": `Vendor Order Status should be type of String`
            }),
        provider: Joi.object().keys({
            drop_off: Joi.string()
                .messages({
                    "string.base": `Drop Off should be type of String`
                }),
            delivery: Joi.string()
                .messages({
                    "string.base": `Delivery should be type of String`
                })
        }),
        
        tracking_number: Joi.string()
            .messages({
                "string.base": `Tracking Number should be type of String`
            }),
        invoice_number: Joi.string()
            .messages({
                "string.base": `Invoice Number should be type of String`
            }),
        estimate_delivery_time: Joi.date()
            .messages({
                "date.base": `Estimate Delivery Time should be type of Date`
            }),
        delivered_time: Joi.date()
            .messages({
                "date.base": `Delivery Time should be type of Date`
            }),
        printed: Joi.boolean()
            .messages({
                "boolean.base": `Printed should be type of Boolean`
            }),
        cancellation_reasons: Joi.string()
            .messages({
                "string.base": `Cancellation Reasons should be type of String`
            }),
        refunds: Joi.number()
            .messages({
                "number.base": `Refunds should be type of Number`
            })

    })

    const { value, error } = joiSchema.validate({ 
        product,
        total_price,
        shipment_fee,
        seller_discount,
        total,
        payment_information,
        billing_address,
        shipment_address,
        user_order_status,
        vendor_order_status,
        provider,
        tracking_number,
        invoice_number,
        estimate_delivery_time,
        delivered_time,
        printed,
        cancellation_reasons,
        refunds
    }, { 
        escapeHtml: true 
    })
    return { value, error }
}

export { orderValidation }