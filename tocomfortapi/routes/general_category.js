const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req,res) => {
     db.any("SELECT * FROM public.\"General_Category\"")
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;