(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{283:function(t,e,n){var content=n(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("5ecb0790",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";var r={},o=n(26),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",{staticClass:"footer footer-5",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 text--center"},[e("div",{staticClass:"footer--copyright"},[e("span",[this._v("© 2020 ---, crafted With "),e("i",{staticClass:"fa fa-heart"}),this._v(" by")]),this._v(" "),e("a",{attrs:{href:""}},[this._v("zytheme.com")])])])])])])])}],!1,null,null,null);e.a=component.exports},312:function(t,e,n){"use strict";var r=n(283);n.n(r).a},313:function(t,e,n){(e=n(51)(!1)).push([t.i,".textcard{text-align:left!important}",""]),t.exports=e},315:function(t,e,n){"use strict";n.r(e);var footer=n(284),r=n(26),header=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"landing-hero bg-dark",attrs:{id:"hero"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-md-offset-1 text-center"},[e("h1",{staticClass:"text-white"},[this._v("Build Your "),e("br"),this._v("ebook landing page")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center"},[e("p",{staticClass:"text-whit mb-30"},[this._v("Ebo is a creative ebook landing designed with great attention to details, flexibility and performance.")])])])])])])}],!1,null,null,null).exports,o=(n(81),n(295)),l=n.n(o),c=n(142),d=Stripe("pk_test_ZCI214Ne4jFD5Dj3FyVO6s8200Cqp9AJGO"),m={data:function(){return{url:"http://localhost:1337/paybook",name:"",email:"",card:""}},methods:{stripePayment:function(){var t=d.elements();this.card=t.create("card",{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.card.mount("#card-element"),this.card.addEventListener("change",(function(t){var e=document.getElementById("card-errors");t.error?e.textContent=t.error.message:e.textContent=""}))},clickToken:function(){var t=this,e=this.url,n=this.email,r=this.name,o=c.Loading.service({});d.createToken(this.card).then((function(c){if(c.error){document.getElementById("card-errors").textContent=c.error.message}else{var data={stripeToken:c.token.id,email:n,name:r};l()({url:e,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:data}).then((function(e){o.close(),t.$router.push({name:"completed"})})).catch((function(e){o.close(),t.$notify.error({title:"Error",message:e.message})}))}}))}},mounted:function(){this.stripePayment()}},body=(n(312),Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-bottom":"50px","text-align":"center","padding-top":"50px",display:"flex","align-items":"center","justify-content":"center"},attrs:{id:"form-payment"}},[n("div",{staticClass:"row",staticStyle:{"padding-left":"20px","padding-right":"20px","text-align":"center",display:"flex","align-items":"center","justify-content":"center"}},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"el-form",staticStyle:{width:"450px",padding:"20px","background-color":"#fff",margin:"auto","text-align":"center"}},[n("div",{staticClass:"form-row"},[n("label",{staticClass:"el-form-item__label",attrs:{for:"card-element"}},[t._v("\n            Name:\n          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"el-input__inner",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("label",{staticClass:"el-form-item__label",attrs:{for:"card-element"}},[t._v("\n            Email:\n          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"el-input__inner",attrs:{type:"email",placeholder:"ejemplo@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{staticClass:"el-form-item__label",attrs:{for:"card-element"}},[t._v("\n            Credit or debit card:\n          ")]),t._v(" "),n("div",{staticClass:"el-input__inner",attrs:{id:"card-element"}},[t._v("\n            A Stripe Element will be inserted here. --\x3e\n          ")]),t._v(" "),n("div",{attrs:{id:"card-errors",role:"alert"}})]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"el-form-item__content"},[n("button",{staticClass:"btn btn--primary btn--rounded",attrs:{type:"primary"},on:{click:t.clickToken}},[t._v("Submit Payment")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("img",{staticStyle:{width:"auto",height:"450px","text-align":"center",margin:"auto"},attrs:{src:"/assets/images/mockup/book.png"}})])}],!1,null,null,null).exports),f={components:{downloadFooter:footer.a,downloadHeader:header,downloadBody:body},mounted:function(){}},v=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("body",{staticClass:"body-scroll"},[e("div",{staticClass:"wrapper clearfix",attrs:{id:"wrapper"}},[e("downloadHeader"),this._v(" "),e("downloadBody"),this._v(" "),e("downloadFooter")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);