import React from 'react';
import { Route, Routes} from 'react-router-dom';
import ProductRow from '../../../components/ProductComponents/ProductRow';



const ShoppingRouter = (props) =>{
    return(
    <Routes>
        <Route exact path="/" element={<ProductRow/>}/>
    </Routes>
    )
}
export default ShoppingRouter;