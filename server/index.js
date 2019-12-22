const express = require('express')
const consola = require('consola')

const stripe = require("stripe")('sk_test_eORCCVimXdzqx6SSfddGEikv00lQ1MZyPQ');
const bodyParser = require("body-parser");

const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server
  app.use(bodyParser.urlencoded({ extended: true }));
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.post("/charge", (req, res) => {
    let amount = 500;
    stripe.charges.create(
      {
        amount,
        currency: 'usd',
        source: req.body.stripeToken,
        description: 'Charge for jenny.rosen@example.com',
      },
      function(err, charge) {
        // asynchronously called
        res.send({
          status: 200,
          charge
        })
      }
    );
    // stripe.customers.create({
    //   email: req.body.email,
    //   card: req.body.id
    // })
    // .then(customer =>
    //   stripe.charges.create({
    //     amount,
    //     description: "Sample Charge",
    //     currency: "USD",
    //     customer: customer.id
    //   }))
    // .then(charge => res.send(charge))
    // .catch(err => {
    //   console.log("Error:", err);
    //   res.status(500).send({error: "Purchase Failed"});
    // });
  });

  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
