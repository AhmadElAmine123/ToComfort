const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {
    let OrderID =[];
    const ids= req.params.itemsId.split(',');
    db.any("INSERT INTO \"Order_Details\" (user_id,total,payment_id,created_at,modified_at) VALUES ( \'"+req.params.user_id+"\', \'"+req.params.totalPrice+"\', \'"+0+"\', TO_TIMESTAMP (\'"+req.params.timeStamp+"\'), TO_TIMESTAMP (\'"+req.params.timeStamp+"\') )")
    .then(rows=>{
        res.json(rows);
        
        db.any("SELECT id FROM public.\"Order_Details\" WHERE user_id IN (\'"+req.params.user_id+"\') AND created_at IN (TO_TIMESTAMP (\'"+req.params.timeStamp+"\')) AND modified_at IN (TO_TIMESTAMP (\'"+req.params.timeStamp+"\'))")
        
        .then(rows=>{
            OrderID=rows[0].id;
            for(var i=0;i<ids.length;i++){
                db.any("INSERT INTO \"Order_Item\" (order_id,product_id,created_at,modified_at) VALUES  ( \'"+OrderID+"\', \'"+ids[i]+"\', TO_TIMESTAMP (\'"+req.params.timeStamp+"\'), TO_TIMESTAMP (\'"+req.params.timeStamp+"\') )")
            }
        })
        .catch(error =>{
            console.log(error)
        }) 
    })
    .catch(error =>{
        console.log(error)
    })  

});
module.exports = router;