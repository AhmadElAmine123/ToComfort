const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {
    db.any("SELECT * FROM public.\"Product_Category\" WHERE general_category_id="+req.params.categoryID)
     
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;