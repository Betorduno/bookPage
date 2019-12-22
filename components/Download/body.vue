<template>
  <div style="padding-bottom:120px; padding-top: 120px; ">
  <div class="row" style="border: solid #303133; padding-left: 20px; padding-right:20px;">
    <div class="col-lg-6">
      <img src="/assets/images/mockup/book.png" style="width:auto; height: 450px; text-align: center; margin: auto;">
    </div>
    <div class="col-lg-6">
          <form class="el-form" action="/charge" method="post" id="payment-form" style="width:450px; padding:20px; background-color: #fff; margin:auto; text-align:center">
            <div class="form-row">
              <label class="el-form-item__label" for="card-element">
                Email:
              </label>
              <input class="el-input__inner" type="email" placeholder="ejemplo@gmail.com">
              <label class="el-form-item__label" for="card-element">
                Credit or debit card:
              </label>
              <div class="el-input__inner" id="card-element">
                A Stripe Element will be inserted here. -->
              </div>

              <!-- Used to display form errors. -->
              <div id="card-errors" role="alert"></div>
            </div> -->
            <br/>
            <div class="el-form-item__content">

            <button type="primary" class="el-button el-button--primary">Submit Payment</button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    stripePayment () {
      var stripe = Stripe('pk_test_ZCI214Ne4jFD5Dj3FyVO6s8200Cqp9AJGO');

      // Create an instance of Elements.
      var elements = stripe.elements();

      // Custom styling can be passed to options when creating an Element.
      // (Note that this demo uses a wider set of styles than the guide below.)
      var style = {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      };

      // Create an instance of the card Element.
      var card = elements.create('card', {style: style});

      // Add an instance of the card Element into the `card-element` <div>.
      card.mount('#card-element');

      // Handle real-time validation errors from the card Element.
      card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      // Handle form submission.
      var form = document.getElementById('payment-form');
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
          if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
          } else {
            // Send the token to your server.
            stripeTokenHandler(result.token);
          }
        });
      });

      // Submit the form with the token ID.
      function stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
      }
    }
  },
  mounted(){
      // this.cliente();
      this.stripePayment()
  }
}
</script>

<style>
.textcard{
  text-align: left !important;

}
</style>
