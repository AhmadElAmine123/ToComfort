const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {
    //console.log('INSERT INTO.\"User\" (email,password,first_name,last_name,created_at,modified_at) VALUES ('+req.params.email+','+req.params.password+','+req.params.fname+','+req.params.lname+','+"2000-01-01 00:00:00"+','+"2000-01-01 00:00:00"+') ')
    db.any("INSERT INTO \"User\" (email, password, first_name, last_name, created_at, modified_at) VALUES ( \'"+req.params.email+"\', \'"+req.params.password+"\', \'"+req.params.fname+"\', \'"+req.params.lname+"\', TO_TIMESTAMP (\'"+req.params.timeStamp+"\'), TO_TIMESTAMP (\'"+req.params.timeStamp+"\') )")
     
    
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;