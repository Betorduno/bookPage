<template>
<div>
  <body class="body-scroll">
    <div id="wrapper" class="wrapper clearfix">
      <!-- <homeHeader /> -->
      <homeBody />
      <homeFooter />
    </div>
  </body>
</div>
</template>

<script>
import homeFooter from "../components/footer";
import homeHeader from '../components/header';
import homeBody from '../components/Home/body';
export default {
  components: {
    homeHeader,
    homeBody,
    homeFooter
  }
};
</script>
