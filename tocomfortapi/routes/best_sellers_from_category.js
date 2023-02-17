const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {

    db.any("SELECT * FROM public.\"Product\" WHERE General_Category_id = "+req.params.categoryID+" ORDER BY quantity_sold DESC LIMIT 20")
     
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;