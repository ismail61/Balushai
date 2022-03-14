import Joi from "joi"

const categoryValidation = ({
    name, 
    slug, 
    description, 
    image,
    show_on_home_page,
    include_in_top_menu,
    published
    }) => {


    const joiSchema = Joi.object().keys({
        name: Joi.string().required()
            .messages({
                "string.base": `Name should be type of String`,
                "any.required": `Name is Required.`
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
        image: Joi.object().keys({
            url: Joi.string()
                .messages({
                    "string.base": `Image Url should be type of String`
                }),
            public_id: Joi.string()
                .messages({
                    "string.base": `Public Id should be type of String`,
                })
        }),
        show_on_home_page: Joi.boolean()
            .messages({
                "boolean.base": `Show on Home Page should be type of Boolean`
            }),
        include_in_top_menu: Joi.boolean()
            .messages({
                "boolean.base": `Include in Top Menu should be type of Boolean`
            }),
        published: Joi.boolean()
            .messages({
                "boolean.base": `Published should be type of Boolean`
            })
    })

    const { value, error } = joiSchema.validate({ 
        name, 
        slug, 
        description, 
        image,
        show_on_home_page,
        include_in_top_menu,
        published
     }, { escapeHtml: true })
    return { value, error }
}

export { categoryValidation }