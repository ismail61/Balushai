import { Product, Vendor } from "../../mongodb/vendor/models";

export const addProduct = async (vendor_id, data) => {
    try {
        const newProduct = await new Product({
            ...data,
            vendor_id: vendor_id
        });
        const savedProduct = await newProduct.save();
        await pushVendorProducts(vendor_id, newProduct._id)
        return savedProduct;
    } catch (err) {
        console.log(err);
    }
}

const pushVendorProducts = async (vendor_id, product_id) => {
    console.log('vendor_id :' + vendor_id + 'product_id : ' + product_id);
    let productsArray = await Vendor.findOne({ _id: vendor_id }).select('products -_id') || [];
    const { products } = productsArray;
    products?.push({ _id: product_id });
    await Vendor.findOneAndUpdate({ products });
}

export const getProduct = async (query) => {
    try {
        return await Product.findOne(query);
    } catch (err) {
        console.log(err);
    }
}

export const getAllProducts = async (query) => {
    try {
        return await Product.find(query);
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (query, data) => {
    try {
        return await Product.findOneAndUpdate(query, { $set: data } , {new : true})
    } catch (err) {
        console.log(err)
    }
}


//SKU Check 
export const sellerSKUCheck = async (body) => {
    const {
        vendor_id,
        variant_stock_price_without_color,
        variant_stock_price_with_color_and_size,
        variant_stock_price_with_color
    } = body;

    const products = await Product.find({ vendor_id: vendor_id });
    if (products?.length === 0) return false;
    let sku;

    if (variant_stock_price_with_color_and_size?.length > 0) {
        variant_stock_price_with_color_and_size.forEach(variant => {
            variant?.colors?.forEach(color => {
                color?.sizes?.forEach(size => {
                    sku = size?.seller_sku;
                })
            })
        });
    }
    if (variant_stock_price_with_color?.length > 0) {
        variant_stock_price_with_color.forEach(variants => {
            variants.colors?.forEach(color => {
                sku = color?.seller_sku;
            })
        });
    }
    if (variant_stock_price_without_color) {
        sku = variant_stock_price_without_color.seller_sku;
    }
    let res;

    products.forEach(product => {
        if (product.variant_stock_price_with_color_and_size?.length > 0) {
            product.variant_stock_price_with_color_and_size.forEach(variant => {
                variant?.colors?.forEach(color => {
                    color?.sizes?.forEach(size => {
                        res = (sku === size?.seller_sku) ? true : false;
                        return;
                    })
                })
            });
        } else if (product.variant_stock_price_with_color?.length > 0) {
            product.variant_stock_price_with_color.forEach(variant => {
                variant.colors?.forEach(color => {
                    res = (sku === color?.seller_sku) ? true : false;
                    return;
                })
            });
        } else {
            res = (sku === variant_stock_price_without_color?.seller_sku) ? true : false;
            return;
        }
    })
    return res;
}

// Filter Product
getProducts: async (req, res) => {
    const Cg = req.query.Cg
    const filter = req.query.filter
    const from = req.query.from
    const to = req.query.to
    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}
    
    console.log(req.query.keyword)

    if(Cg){
        const products =  await Product.find({category : Cg});
        res.json(products)

    }
    else if(filter){
        switch (filter) {
            case 'Rating':
                const productsbyrating =  await Product.find({}).sort('-rating').exec();
                res.json(productsbyrating)

                break;
            case 'date':
                const productsbydate =  await Product.find({}).sort('createdAt').exec();
                res.json(productsbydate)
                    break;
            case 'highprice':
                const productsbyhighprice =  await Product.find({}).sort('price');
                res.json(productsbyhighprice)
                    break;
            case 'lowprice':
                const productsbylowprice =  await Product.find({}).sort('-price').exec();
                res.json(productsbylowprice)
                    break;
            case 'brand':
                const productbyservices = await P
        
            default:
                break;
        }
    }else if(from && to){
        const productbyprice =  await Product.find({price:{$lte:to},price:{$gte:from}});
        res.json(productbyprice)

    }else{
        const products =  await Product.find({...keyword});
        res.json(products)

    }
}

/* export const getProducts = asyncHandler(async (req, res) => {
    const Cg = req.query.Cg
    const filter = req.query.filter
    const from = req.query.from
    const to = req.query.to
    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}
    
    console.log(req.query.keyword)

    if(Cg){
        const products =  await Product.find({category : Cg});
        res.json(products)

    }
    else if(filter){
        switch (filter) {
            case 'Rating':
                const productsbyrating =  await Product.find({}).sort('-rating').exec();
                res.json(productsbyrating)

                break;
            case 'date':
                const productsbydate =  await Product.find({}).sort('createdAt').exec();
                res.json(productsbydate)
                    break;
            case 'highprice':
                const productsbyhighprice =  await Product.find({}).sort('price');
                res.json(productsbyhighprice)

                    break;
            case 'lowprice':
                const productsbylowprice =  await Product.find({}).sort('-price').exec();
                res.json(productsbylowprice)
                    break;

            default:
                break;
        }
    }else if(from && to){
        const productbyprice =  await Product.find({price:{$lte:to},price:{$gte:from}});
        res.json(productbyprice)

    }else{
        const products =  await Product.find({...keyword});
        res.json(products)

    }
}) */