import Joi from 'joi';

const productValidation = ({product_name, category, video_url, brand, short_description, long_description, whats_in_the_box, warranty_type, warranty_period, warranty_policy, package_weight, package_dimensions, dangerous_goods, status, is_deleted, is_active, variant_stock_price_with_color_and_size, variant_stock_price_with_color, variant_stock_price_without_color, }) => {
    const joiSchema = Joi.object().keys({
        product_name: Joi.string().required()
            .message({
                "string.base": `Product name should be a type of String`,
                "any.required": `Product name is Required.`
            }),
        category: Joi.string().required()
            .message({
                "string.base": `Category should be a type of String`,
                "any.required": `Category is Required.`
            }),
        video_url: Joi.string()
            .message({
                "string.base": `Video url shold be a type of String`
            }),
        brand: Joi.string().required()
            .message({
                "string.base": `Brand should be a type of String`,
                "any.required": `Brand is Required.`
            }),
        short_description: Joi.string().required()
            .message({
                "string.base": `Short Description should be a type of String`,
                "any.required": `Short Description is Required.`
            }),
        long_description: Joi.object().keys({
            description: Joi.string()
                .message({
                    "string.base": `Description on Long Description should be type of String`
                }),
            image: Joi.array()
                .items({
                    url: Joi.string()
                        .message({
                            "string.base": `URL should be type of String`
                        })
                })
        }),
        whats_in_the_box: Joi.string().max(255).required()
            .message({
                "string.base": `Whats in the Box should be type of String`,
                "any.required": `Whats in the Box is Required.`
            }),
        warranty_type: Joi.string()
            .message({
                "string.base": `Warranty Type should be type of String`
            }),
        warranty_period: Joi.string()
            .message({
                "string.base": `Warranty Period should be type of String`
            }),
        package_weight: Joi.string()
            .message({
                "string.base": `Package Weight should be type of String`
            }),
        warranty_policy: Joi.string()
        .message({
            "string.base": `Warranty Policy should be type of String`
        }),
        package_dimensions: Joi.object().keys({
            length: Joi.string()
            .message({
                "string.base": `length should be type of String`
            }),
            width: Joi.string()
            .message({
                "string.base": `width should be type of String`
            }),
            height: Joi.string()
            .message({
                "string.base": `height should be type of String`
            }),
        }),
        dangerous_goods: Joi.string()
            .message({
                "string.base": `Dangerous Goods should be type of String`
            }),
        status: Joi.string()
            .message({
                "string.base": `Status should be type of String`
            }),
        is_deleted: Joi.boolean()
            .message({
                "boolean.base": `Is Deleted should be type of Boolean`
            }),
        is_active: Joi.boolean()
            .message({
                "boolean.base": `Is Active should be type of Boolean`
            }),
        variant_stock_price_with_color_and_size: Joi.array()
            .items({
                color: Joi.array()
                    .items({
                        color_family: Joi.string()
                            .message({
                                "string.base": `Color Family should be type of String` 
                            }),
                        image: Joi.array()
                            .items(Joi.string().message({"string.base": `URL should be type of String`})),
                        _size: Joi.array()
                            .items({
                                price: Joi.number().required()
                                    .message({
                                        "number.base": `Price in Varient's Item should be type of Number`,
                                        "any.required": `Price in Varient's Item is Required.`
                                    }),
                                special_price: Joi.number()
                                    .message({
                                        "number.base": `Special Price in Varient's Item should be type of Number`,
                                    }),
                                quantity: Joi.number().required()
                                    .message({
                                        "number.base": `Quantity in Varient's Item should be type of Number`,
                                        "any.required": `Quantity in Varient's Item is Required.`
                                    }),
                                seller_sku: Joi.string().max(200)
                                    .message({
                                        "string.base": `Seller SKU should be type of String` 
                                    }),
                                free_items: Joi.string()
                                    .message({
                                        "string.base": `Free Items should be type of String` 
                                    })
                            }),
                        availability: Joi.boolean()
                            .message({
                                "boolean.base": `Availability should be type of Boolean`
                            })
                    })
            }),
        variant_stock_price_with_color: Joi.array()
            .items({
                color: Joi.array()
                    .items({
                        availability: Joi.boolean()
                            .message({
                                "boolean.base": `Availability should be type of Boolean`
                            }),
                        color_family: Joi.string()
                        .message({
                            "string.base": `Color Family should be type of String` 
                        }),
                        image: Joi.array()
                            .items(Joi.string().message({"string.base": `URL should be type of String`})),
                        price: Joi.number().required()
                            .message({
                                "number.base": `Price in Varient's Item should be type of Number`,
                                "any.required": `Price in Varient's Item is Required.`
                            }),
                        special_price: Joi.number()
                            .message({
                                "number.base": `Special Price in Varient's Item should be type of Number`,
                            }),
                        quantity: Joi.number().required()
                            .message({
                                "number.base": `Quantity in Varient's Item should be type of Number`,
                                "any.required": `Quantity in Varient's Item is Required.`
                            }),
                        seller_sku: Joi.string().max(200)
                            .message({
                                "string.base": `Seller SKU should be type of String` 
                            }),
                        free_items: Joi.string()
                            .message({
                                "string.base": `Free Items should be type of String` 
                            })
                    })
            }),
        variant_stock_price_without_color: Joi.object().keys({
            availability: Joi.boolean()
                .message({
                    "boolean.base": `Availability should be type of Boolean`
                }),
            image: Joi.array()
                .items(Joi.string().message({"string.base": `URL should be type of String`})),
            price: Joi.number().required()
                .message({
                    "number.base": `Price in Varient's Item should be type of Number`,
                    "any.required": `Price in Varient's Item is Required.`
                }),
            special_price: Joi.number()
                .message({
                    "number.base": `Special Price in Varient's Item should be type of Number`,
                }),
            quantity: Joi.number().required()
                .message({
                    "number.base": `Quantity in Varient's Item should be type of Number`,
                    "any.required": `Quantity in Varient's Item is Required.`
                }),
            seller_sku: Joi.string().max(200)
                .message({
                    "string.base": `Seller SKU should be type of String` 
                }),
            free_items: Joi.string()
                .message({
                    "string.base": `Free Items should be type of String` 
                })
        })
    })

    const { value, error } = joiSchema.validate({ product_name, category, video_url, brand, short_description, long_description, whats_in_the_box, warranty_type, warranty_period, warranty_policy, package_weight, package_dimensions, dangerous_goods, status, is_deleted, is_active, variant_stock_price_with_color_and_size, variant_stock_price_with_color, variant_stock_price_without_color }, { escapeHtml: true })
    return { value, error }
}

export { productValidation }