const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {
    req.params.email
    req.params.password

    db.any("SELECT * FROM public.\"User\" WHERE email IN (\'"+req.params.email+"\') AND password IN (\'"+req.params.password+"\')")
     
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;