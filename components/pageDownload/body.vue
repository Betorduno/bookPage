<template>
  <div id="form-payment" style="padding-bottom:50px;text-align:center;padding-top: 50px;display:flex;align-items: center;justify-content: center;">
    <div class="row" style="padding-left:20px;padding-right:20px;text-align:center;display:flex;align-items: center;justify-content: center;">
      <div class="col-lg-6">
        <img src="/assets/images/mockup/book.png" style="width:auto; height: 450px; text-align: center; margin: auto;"/>
      </div>
      <div class="col-lg-6">
        <div class="el-form" style="width:450px; padding:20px; background-color: #fff; margin:auto; text-align:center">
          <h3>Book</h3>
          <p style="text-align: left">Please enter the email you register at the time of purchase of the book.</p>
          <div class="form-row">
            <label class="el-form-item__label" for="card-element">Email:</label>
            <input class="el-input__inner" v-model="email" type="email" placeholder="ejemplo@gmail.com"/>
          </div>
          <br />
          <div class="el-form-item__content">
            <button @click="queryEmail" type="primary" class="btn btn--primary btn--rounded">
              Submit Payment
            </button>
          </div>
        </div>
        <br>
         <div v-if="estado" class="el-form" style="width:450px; padding:20px; background-color: #fff; margin:auto; text-align:center">
          <p>Hi, {{name}} to download your book press the download button</p>
          <div class="el-form-item__content">
            <button style="background-color:black;color:white; width:200px;height:50px;border:1px solid black;cursor:pointer;">
              <a :href="urlBook" style="color: white;text-decoration: none;font-size: 15px;" >Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BASE_URL } from "../../utils/endspoint";
import axios from "axios";
import { ValidationProvider } from 'vee-validate';

export default {
  data() {
    return {
      url: BASE_URL + "/downloadBook",
      id: "",
      email: "",
      estado:false,
      urlBook:"",
      name: ""
    };
  },
  methods: {

    validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      },
    queryEmail() {
      let url = this.url;
      let email = this.email;

    if(this.validateEmail(email)){
        axios({
          url: url,
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            params: {
              email: email
              }
              }).then(response => {
                if (response) {
                  this.name = response.data.data.searchEmail.name;
                  this.urlBook = response.data.data.book.url;
                  this.estado = response.data.data.estado;
                  }
                  }).catch(err => {
                    this.$notify.error({
                          title: 'Error',
                          message: 'Email not found.'
                      });
                    this.name = null;
                    this.urlBook = null;
                    this.estado = false;
                    });
                  }
                  else{
                    this.$notify.error({
                          title: 'Error',
                          message: 'Fill in the field email.'
                      });
                  }
                }
              }
};
</script>

<style lang="stylus" scoped>

</style>
