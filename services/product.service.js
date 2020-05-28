const db = require('../dataBase').getInstance();

class ProductService {

    getAllProducts() {
        const ProductModel = db.getModel('Product');

        return ProductModel.findAll({})
    }

    createProduct(product) {
        const ProductModel = db.getModel('Product');

        return ProductModel.create(product)
    }

    getProduct(productId) {
        const ProductModel = db.getModel('Product');

        return ProductModel.findOne({
            where: {
                id: productId
            }
        });
    }

    updateProduct(productId, product) {
        const ProductModel = db.getModel('Product');

        return ProductModel.update({
            type: product.type,
            brand: product.brand,
            price: product.price
        }, {
            where: {
                id: productId
            }
        });
    }

    deleteProduct(productId) {
        const ProductModel = db.getModel('Product');

        return ProductModel.destroy({
            where: {
                id: productId
            }
        });
    }
}

module.exports = new ProductService;
