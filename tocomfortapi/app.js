const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

const db = require('./database');

app.use(express.json());
app.use(cors());

//send the user table to the react application
const userRouter = require('./routes/user');
app.use('/user',userRouter);

//send the product table to the react application
const productRouter = require('./routes/product');
app.use('/product',productRouter);


//send the general_categories table to the react application
const general_categoryRouter = require('./routes/general_category');
app.use('/general_category',general_categoryRouter);

//send the product_categories table to the react application
const product_categoryRouter = require('./routes/product_category');
app.use('/product_category',product_categoryRouter);

//send the product_categories table to the react application
const products_by_categoryRouter = require('./routes/products_by_category');
app.use('/products_by_category/p/:categoryID',products_by_categoryRouter);

//send the product_by_ID table to the react application
const product_by_idRouter = require('./routes/product_by_id');
app.use('/product_by_id/p/:productID',product_by_idRouter);

//send the product_by_ID table to the react application
const category_by_generalCategoryID = require('./routes/category_from_general');
app.use('/category_from_general/p/:categoryID',category_by_generalCategoryID);

//send the product_by_ID table to the react application
const best_sellers_from_category = require('./routes/best_sellers_from_category');
app.use('/best_sellers_from_category/p/:categoryID',best_sellers_from_category);

//send all the products that fit into filter
const products_by_filters = require('./routes/products_by_filters');
app.use('/products_by_filters/p/:categoryID/:product_categoryID/:min/:max/:search',products_by_filters)

//send all the products that fit into filter
const cart_Products = require('./routes/cartProducts');
app.use('/cartProducts/p/:productsString',cart_Products)

//send all the products that fit into filter
const addUser = require('./routes/addUser');
app.use('/addUser/p/:fname/:lname/:email/:password/:timeStamp',addUser)
//send all the products that fit into filter
const checkAuthentication = require('./routes/authentication');
app.use('/authentication/p/:email/:password',checkAuthentication)

//send all the products that fit into filter
const getUser = require('./routes/getUser');
app.use('/getUser/p/:id',getUser)

//Add an order to the database
const addOrder = require('./routes/addOrder');
app.use('/addOrder/p/:user_id/:totalPrice/:timeStamp/:itemsId',addOrder)

app.get("/api",(req,res) => {
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.listen(port, () =>{ });