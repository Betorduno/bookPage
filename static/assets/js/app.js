
const express = require("express");
const stripe = require("stripe")('sk_test_eORCCVimXdzqx6SSfddGEikv00lQ1MZyPQ');
const bodyParser = require("body-parser");
const cors = require("cors");

//Create the Express routes
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/charge", (req, res) => {
  let amount = 500;
  console.log(req.body);
  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "USD",
      customer: customer.id
    }))
  .then(charge => res.send(charge))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});

app.listen(3001, ()=>console.log('server running'));
