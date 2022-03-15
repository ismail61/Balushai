import Joi from "joi";

const orderValidation = ({
    product,
    shipment_fee,
    seller_discount,
    payment_information,
    user_id,
    billing_address,
    shipping_address,
    provider,
    tracking_number,
    invoice_number,
    estimate_delivery_time,
    delivered_time,
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
            vendor_id: Joi.string().hex().length(24).required()
                .messages({
                    "string.base": `Vendor ID should be type of ObjectID`,
                    "any.required": `Vendor ID is Required.`
                }),
            product_id: Joi.string().hex().length(24).required()
                .messages({
                    "string.base": `Product ID should be type of ObjectID`,
                    "any.required": `Product ID is Required.`
                }),
            price: Joi.number().required()
                .messages({
                    "number.base": `Price should be type of Number`,
                    "any.required": `Price is Required.`
                }),
            description: Joi.string()
                .messages({
                    "string.base": `Description should be type of String`,
                }),
        }).required().min(1)
            .messages({
                "any.required": `Product Details is Required.`
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
        }).required()
            .messages({
                "any.required": `Payment Information is Required.`
            }),
        user_id: Joi.string().hex().length(24).required()
            .messages({
                "string.base": `User ID should be type of ObjectID`,
                "any.required": `User ID is Required.`
            }),
        billing_address: Joi.object().keys({
            full_name: Joi.string().required()
                .messages({
                    "string.base": `Full Name should be type of String`,
                    "any.required": `Full Name is Required.`
                }),
            phone_number: Joi.string().regex(/^(?:\+88|88)?(01[3-9]\d{8})$/).required()
                .messages({
                    "string.pattern.base": `Please Enter the Valid BD Phone number! `,
                    "any.required": `Phone Number is Required.`
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
            /*  effective_delivery_label: Joi.string()
                 .messages({
                     "string.base": `Effective Delivery Label should be type of String`
                 }) */
        }).required()
            .messages({
                "any.required": `Billing Address is Required.`
            }),
        shipping_address: Joi.object().keys({
            full_name: Joi.string().required()
                .messages({
                    "string.base": `Full Name should be type of String`,
                    "any.required": `Full Name is Required.`
                }),
            phone_number: Joi.string().regex(/^(?:\+88|88)?(01[3-9]\d{8})$/)
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
            /*             effective_delivery_label: Joi.string()
                            .messages({
                                "string.base": `Effective Delivery Label should be type of String`
                            }) */
        }).required()
            .messages({
                "any.required": `Shipping Address is Required.`
            }),
        /*   user_order_status: Joi.string().valid('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED', 'RETURNED', 'DELIVERY_FAILED')
              .messages({
                  "string.base": `User Order Status should be type of String`
              }),
  
          vendor_order_status: Joi.string().valid('PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED', 'DELIVERY_FAILED')
              .messages({
                  "string.base": `Vendor Order Status should be type of String`
              }), */
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
        shipment_fee,
        seller_discount,
        payment_information,
        user_id,
        billing_address,
        shipping_address,
        provider,
        tracking_number,
        invoice_number,
        estimate_delivery_time,
        delivered_time,
        cancellation_reasons,
        refunds
    }, {
        escapeHtml: true
    })
    return { value, error }
}

export { orderValidation }