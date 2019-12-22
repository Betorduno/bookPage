<template>
  <div>
    <body class="body-scroll">
      <div id="wrapper" class="wrapper clearfix">
        <downloadHeader/>
        <downloadBody/>
        <downloadFooter/>
      </div>
    </body>
  </div>
</template>
<script>
import downloadFooter from "../components/footer";
import downloadHeader from "../components/Download/header";
import downloadBody from "../components/Download/body";


export default {
  components: {
    downloadFooter,
    downloadHeader,
    downloadBody
  }, mounted(){

  }
};
</script>
