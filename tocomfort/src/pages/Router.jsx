
import React from 'react';
import { Route, Routes} from 'react-router-dom';

//Imports of the pages
import Home from './Home';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Categories from './Categories';
import ProductPage from './ProductPage/ProductPage';
import AdminHome from './adminPages/AdminHome';
import AboutUs from './AboutUs';
import Shop from './shop/Shop';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import Purchases from './Purchases';
import SignOut from './SignOut';
import ViewCart from './ViewCart';
import PaymentForm from './PaymentForm';


const MyRouter = ()=>{
    return (
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route   path="/contactus/" element={<Shop/>}/>
              <Route   path="/productPage/:productID" element={<ProductPage/>}/>
              <Route   path="/shop/" element={<Shop/>}/>
              <Route   path="/about" element={<AboutUs/>}/>
              <Route   path="/bundles" element={<Blog/>}/>
              <Route   path="/adminPage" element={<AdminHome/>}/>
              <Route path = '/profile' element ={<Profile/>}/>
              <Route path = '/signIn' element = {<SignIn/>}/>
              <Route path = '/signUp' element = {<SignUp/>}/>
              <Route path = '/signOut' element = {<SignOut/>}/>
              <Route path = '/purchases' element = {<Purchases/>}/>
              <Route path = '/viewCart' element = {<ViewCart/>}/>
              <Route path = '/paymentForm' element = {<PaymentForm/>}/>
            </Routes>
    )
}
export default MyRouter;