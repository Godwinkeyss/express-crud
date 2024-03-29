const Product = require('../models/Products.js');
const router = require('express').Router();

// get all products

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send({ message: 'something went wrong', err });
  }
});

// get a single product

router.get('/:id', async(req,res) =>{
    try{
       const {id} = req.params
       const product = await Product.findById(id)
      

       if(!product){
         res.status(404).send({message:"no product found"})
       }else{
        res.status(200).send(product)
       }
    }catch(err){
      res.status(500).send({message:"something went wrong",err})
    }
})

// update a product

router.put('/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const products = await Product.findById(id)
        // const product = await Product.findByIdAndUpdate(id)
        if(!products){
            res.status(404).send({message:"no product found"})
        }else{
             const product = await Product.findByIdAndUpdate(id,req.body)

            res.status(200).send({message:"Product is updated successfully",product})
           
        }
         
    }catch(err){
        res.status(500).send({message:"something went wrong",err})

    }
})

// delete a product
router.delete('/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).send({message:"no product found"})
        }else{
            res.status(200).send({message:"Product is deleted successfully"})
        }
    }catch(err){
        res.status(500).send({message:"something went wrong",err})

    }
})

// post a product
router.post('/', async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.body.image,
  });

  const saveProduct = await newProduct.save();
  res
    .status(200)
    .send({ message: 'product created successfully', saveProduct });
});

module.exports = router;
