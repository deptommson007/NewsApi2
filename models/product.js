const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt:{
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values:["apple", "iphone", "mi","samsung","dell"],
      message : `{VALUE} is not supported`,
    },
  },
   category: {
    type: String,
    required: true,
  },
  
});

// const businessSchema = new mongoose.Schema({
//   products: [productSchema]
// });
module.exports = mongoose.model("Product", productSchema);

// module.exports = mongoose.model('Business', businessSchema);
