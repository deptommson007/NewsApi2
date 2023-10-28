// const Product = require("../models/product");
// // const Business = require("../models/product2");

// const getAllProducts = async (req, res) => {
   
// const { company, name, featured, sort, select } = req.query;
// const queryObject = {};

// if (company) {
//    queryObject.company = company;
// }
// if (name) {
//    queryObject.name = { $regex: name, $options: "i"};
// }

// if (featured) {
//    queryObject.featured = featured;
// }

// let apiData = Product.find(queryObject);

// if(sort) {
//    let sortFix = sort.split(",").join(" ");
//    apiData = apiData.sort(sortFix);
// }
// if(select) {
//    // let selectFix = select.replace(",", " ");
//    let selectFix = select.split(",").join(" ");
//    apiData = apiData.select(selectFix);
// }

// let page = Number(req.query.page) || 1;
// let limit = Number(req.query.limit) || 10;

// let skip = (page - 1) * limit;

// apiData = apiData.skip(skip).limit(limit)

//    const myData = await apiData; // const Products = await Product.find({});
//    // const myData = await Business.find({});
//    res.status(200).json({ myData, nbHits: myData.length });
// };

// const getAllProductsTesting = async (req, res ) => {
//    const Products = await Product.find(req.query);
//    console.log(
//      " ~ file: product.js ~ line 10 ~ getAllProductsTesting ~ req.query",
//      req.query
//    );
//     res.status(200).json({ Products });
//  };

//  module.exports = { getAllProducts, getAllProductsTesting };
 const Product = require("../models/product");
 // const Business = require("../models/business");
 

const getAllProducts = async (req, res) => {

   const { company, name, featured, sort, select } = req.query;
   const queryObject = {};

  if(company) {
   queryObject.company = company;
   // console.log(queryObject)
  }
  if (name) {
      queryObject.name = { $regex: name, $options: "i"};
   }
   if (featured) {
         queryObject.featured = featured;
       }

       let apiData = Product.find(queryObject);
       // let apiDataB = Business.find(queryObject);
   

   if(sort) {
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
      // apiDataB = apiDataB.sort(sortFix);
   }
   if(select) {
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
      // apiDataB = apiDataB.select(selectFix);
   }

   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 10;
   
    let skip = (page - 1) * limit;
   
    apiData = apiData.skip(skip).limit(limit);
    // apiDataB = apiDataB.skip(skip).limit(limit);

   const products = await apiDataP;
    // const business = await apiDataB;
    // const responseData = {
    //   products: products,
    //   business: business
    // };
   res.status(200).json({products, nbHits: products.length })
};
const getAllProductsTesting = async (req, res) => {
   res.status(200).json({msg: "I have got all productsTesting"})
}


module.exports = { getAllProducts, getAllProductsTesting}
