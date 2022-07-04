const data = require('../shared/product-data');

module.exports = async function (context, req) {

  try {
    data.getProducts();
    context.res.status(200).json({});
  } catch (error) {
    context.res.status(500).send(error);
  }
};
