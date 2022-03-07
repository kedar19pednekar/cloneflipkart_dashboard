import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';

const productsSchema = mongoose.Schema({
    id: String,
    url: String,
    // NA detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

//  autoIncrement.initialize(mongoose.connection);
//  productsSchema.plugin(autoIncrement.plugin, 'products');
 const products= mongoose.model('products',productsSchema);

 export default products;