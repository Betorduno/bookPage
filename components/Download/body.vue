<template>
  <div id="form-payment" style="padding-bottom:50px;text-align:center;padding-top: 50px;display:flex;align-items: center;justify-content: center;">
    <div class="row" style="padding-left:20px;padding-right:20px;text-align:center;display:flex;align-items: center;justify-content: center;">
      <div class="col-lg-6">
        <img src="/assets/images/mockup/book.png" style="width:auto; height: 450px; text-align: center; margin: auto;">
      </div>
      <div class="col-lg-6">
        <div class="el-form" style="width:450px; padding:20px; background-color: #fff; margin:auto; text-align:center">
          <div class="form-row">
            <label class="el-form-item__label" for="card-element">
              Name:
            </label>
            <input class="el-input__inner" v-model="name" type="text" />
            <label class="el-form-item__label" for="card-element">
              Email:
            </label>
            <input class="el-input__inner" v-model="email" type="email" placeholder="ejemplo@gmail.com">
            <label class="el-form-item__label" for="card-element">
              Credit or debit card:
            </label>
            <div class="el-input__inner" id="card-element">
              A Stripe Element will be inserted here. -->
            </div>
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
          </div>
          <br/>
          <div class="el-form-item__content">
            <button @click="clickToken" type="primary" class="btn btn--primary btn--rounded">Submit Payment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BASE_URL } from '../../utils/endspoint';
import axios from 'axios';
import { Loading } from 'element-ui';
let stripe = Stripe('pk_test_ZCI214Ne4jFD5Dj3FyVO6s8200Cqp9AJGO');

export default {
  data () {
    return {
      url: BASE_URL + '/paybook',
      name: '',
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
    },
    clickToken () {
      let url = this.url;
      let email = this.email;
      let name = this.name;
      let loadingInstance = Loading.service({});

      stripe.createToken(this.card).then((result) => {
          if (result.error) {
            loadingInstance.close();
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
          } else {
            let data = {
              stripeToken: result.token.id,
              email,
              name
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
                loadingInstance.close()
                this.$router.push({ name: 'pageDownload'});
             }).catch(err => {
                loadingInstance.close()
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
      this.stripePayment()
  }
}
</script>

<style>
.textcard{
  text-align: left !important;

}
</style>
