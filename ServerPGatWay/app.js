require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")('sk_test_51NhWdKSJWDDf2WY9rrAqBQDCA6n2xgheeQ7pJtNhxU3Jypnw0ILzdO8l6bokXL9xeFDQzP4lKLAhFB5rSxJTi2Qn000On48OjV');

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;


    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.dish,
                images: [product.imgdata]
            },
            unit_amount: product.price * 100,
        },
        quantity: product.qnty
    }));


    

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/sucess",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id })

})


app.listen(7000, () => {
    console.log("server start")
})