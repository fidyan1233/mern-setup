const express = require("express");
const dotenv = require("dotenv").config();
const productRoute = require("./routes/productRoute")

// port initialization 
const port = process.env.PORT || 4000

// app initialization 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use('/api/v1/product', productRoute);

//function to create a server 
app.listen(port, () => {
        console.log(`app started on server ${port}`);
    }
);