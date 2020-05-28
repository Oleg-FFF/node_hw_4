module.exports = async (req, res, next) => {
    console.log(req.body);
    try {
        const {type, brand, price} = req.body;

        console.log('______________________________________');
        console.log(type, brand, price);
        console.log('______________________________________');


        if (!type || !brand || !price) {
            throw new Error('Product is not valid')
        }

        if (price <= 0 || price > 10000) {
            throw new Error('Price is not valid')
        }

        if (brand.length < 2) {
            throw new Error('Brand is not valid')
        }

        next();

    } catch (Error) {
        res.json(Error.toString())
    }
}
