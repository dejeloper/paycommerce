// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51PnYSzA2t8lirDF5R7YSWg3k7YNt2qUozAKzVDNUQKeNNut1QW0bjVpkVeCA9DsaTmWpSGXSQk7nIG0ynEQz8swU003xReQce5"
);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

const PAGE = "http://localhost:4242";
const PAGE_SHOP = "http://localhost:4200";
app;
app.post("/checkout", async (req, res) => {
  const products = req.body.products.map((product) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.qty,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [...products],
    mode: "payment",
    success_url: `${PAGE_SHOP}/success`,
    cancel_url: `${PAGE_SHOP}/cancel`,
  });

  res.status(200).json(session);
  // const session = await stripe.checkout.sessions.create({
  //   ui_mode: "embedded",
  //   line_items: [
  //     {
  //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //       price: "{{PRICE_ID}}",
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   return_url: `${PAGE}/return.html?session_id={CHECKOUT_SESSION_ID}`,
  // });

  // res.send({ clientSecret: session.client_secret });
});

app.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

app.listen(4242, () => console.log("Running on port 4242"));
