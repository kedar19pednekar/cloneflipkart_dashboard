import Products from '../model/products-schema.js'


export const getProducts = async(request, response) =>{
    
       // response.status(200).json("Hi from dashboard");
        try{
                let products= await Products.find();
                response.json(products);
           }catch(error){
                   response.json({message:error.message});
           }

}

export const addProducts = async(request, response) =>{
        //response.send("Hi from addProducts in controller.js");
        const products =request.body;
        const newProducts = new Products(products);

        try{
             await newProducts.save();
             response.json(newProducts);
        }catch(error){
                response.json({message:error.message});
        }


}

export const getProductsById = async (request, response)=>{
        const id= request.params.id;
        try{
                const products = await Products.findOne({id:id}); // our id is different than  _id:ObjectID
                response.json(products); //products
        }catch(error){
                response.json({message:error.message});
        }
}

export const editProducts = async(request, response) =>{

        const products= request.body; 
        const editProducts = new Products(products);
        try{
                await Products.updateOne({id:request.params.id}, editProducts);
                response.status(201).json(editProducts);
        }catch(error){
                response.status(409).json({message:error.message});
        }

}

export const deleteProducts = async(request, response)=>{
        try{
                await Products.deleteOne({id:request.params.id});
                response.json("Product deleted successfully");
        }catch(error){
                response.json({message:error.message});
        }
}