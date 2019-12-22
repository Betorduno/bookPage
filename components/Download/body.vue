<template>
  <div style="padding-bottom:120px; padding-top: 120px; ">
    <!-- :action="url" method="post" -->
    <div id="payment-form" style="width:450px; padding:20px; background-color: #909399; margin:auto; text-align:center">
      <div class="form-row">
        <label for="card-element" class="textcard">
          Email:
        </label>
        <input class="el-input__inner" v-model="email" type="email" placeholder="ejemplo@gmail.com">
        <label for="card-element">
          Credit or debit card:
        </label>
        <div id="card-element">
          <!-- A Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors. -->
        <div id="card-errors" role="alert"></div>
      </div>
      <br/>
      <button @click="clickToken" type="primary" class="el-button el-button--default">Submit Payment</button>
    </div>
  </div>
</template>
<script>
import { BASE_URL } from '../../utils/endspoint';
import axios from 'axios';
let stripe = Stripe('pk_test_ZCI214Ne4jFD5Dj3FyVO6s8200Cqp9AJGO');

export default {
  data () {
    return {
      url: BASE_URL + '/paybook',
      email: '',
      card: ''
    }
  },
  methods: {
    stripePayment () {
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
      this.card = elements.create('card', {style: style});

      // Add an instance of the card Element into the `card-element` <div>.
      this.card.mount('#card-element');

      // Handle real-time validation errors from the card Element.
      this.card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      // Handle form submission.
      // var form = document.getElementById('payment-form');
      // form.addEventListener('submit', function(event) {
      //   event.preventDefault();

      // });

      // Submit the form with the token ID.
      // function stripeTokenHandler(token) {
      //   // Insert the token ID into the form so it gets submitted to the server
      //   var form = document.getElementById('payment-form');
      //   var hiddenInputToken = document.createElement('input');
      //   hiddenInputToken.setAttribute('type', 'hidden');
      //   hiddenInputToken.setAttribute('name', 'stripeToken');
      //   hiddenInputToken.setAttribute('value', token.id);
      //   form.appendChild(hiddenInputToken);

      //   // Submit the form
      //   form.submit();
      // }
    },
    clickToken () {
      let url = this.url;
      let email = this.email;

      stripe.createToken(this.card).then((result) => {
          if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
          } else {
            // Send the token to your server.
            // stripeTokenHandler(result.token);

            let data = { 
              stripeToken: result.token.id,
              email
             };

            axios({
                url,
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                data
            })
            .then(response => {
              console.log(response);
             }).catch(err => {
              this.$notify.error({
                  title: 'Error',
                  message: err.message
              });
            })
          }
      });
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
