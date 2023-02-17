const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../database');

router.get('/', (req,res) => {
    let categoryID=req.params.categoryID;
    let product_categoryID=req.params.product_categoryID;
    let min=parseInt(req.params.min);
    let max=parseInt(req.params.max);
    let search=req.params.search;

    let queryRules = 'WHERE ';
    if(categoryID != null && categoryID!='' && categoryID != 'null' ){
        queryRules+=' General_Category_id = '+categoryID+' ';
    }
    
    if(!queryRules.endsWith("AND ") && queryRules != 'WHERE '){
        queryRules += 'AND '
    }

    if(product_categoryID != 'null' && product_categoryID != null && product_categoryID!=''){
        queryRules +=' category_id = '+product_categoryID+' ';
    }
    if(isNaN(min)){
        min=0;
    }

    if(isNaN(max)){
        max=4000;
    }
    if(!queryRules.endsWith("AND ") && queryRules != 'WHERE '){
        queryRules += 'AND '
    }
    queryRules += 'Price BETWEEN '+min+' AND '+max+' ';
    
    

    if(search != '' && search != 'null' && search != null){
        if(!queryRules.endsWith("AND ") && queryRules != 'WHERE '){
            queryRules += 'AND '
        }
        const searchKeyWords = search.split(" ");
        queryRules += "UPPER(name) LIKE UPPER('%"+searchKeyWords[0]+"%')";
        for(let i = 1;i<searchKeyWords.length;i++){
            queryRules += " AND UPPER(name) LIKE UPPER('%"+searchKeyWords[i]+"%')";
        }

    }
    

    if(queryRules == 'WHERE '){
        queryRules = ';';
    }else{
        queryRules += ';';

    }


    db.any("SELECT * FROM public.\"Product\""+queryRules)
    .then(rows=>{
        res.json(rows);
    })
    .catch(error =>{
        console.log(error)
    }) 
    
});
module.exports = router;