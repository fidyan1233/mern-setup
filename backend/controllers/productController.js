// this controller is to get all products 
const getProducts = async(req,res)=>{
    await res.status(200).json({message:"Get All Products"})
}


// this controller is used to create the product 
const postProduct = async(req,res)=>{
    if(!req.body.name){
        res.status(400);
        throw new Error("Please fill the name field");
    }
    await res.status(200).json({message:"Product created"})
}


// this controller is used to update th product 
const updateProduct = async(req,res)=>{
    await res.status(200).json({message:"product has been updated"})
}



// this controller is to delete the product 
const deleteProduct = async(req,res)=>{
    await res.status(200).json({message:"product hass been deleted"})
}

module.exports = {
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct
}