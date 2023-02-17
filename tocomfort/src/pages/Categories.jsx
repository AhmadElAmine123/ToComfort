import React from 'react';
import ProductRow from '../components/ProductComponents/ProductRow';
import {useParams} from 'react-router-dom';

const Categories = () =>{
    const { Params } = useParams();
    const productCategoryID = useParams().categoryID
    
    return(
        <div>
        <ProductRow categoryID={productCategoryID}/>

        </div>
    )

}
export default Categories;