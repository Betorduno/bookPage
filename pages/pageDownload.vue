<template>
<div>
  <body class="body-scroll">
    <div id="wrapper" class="wrapper clearfix">
      <downHeader />
      <downBody />
      <downFooter />
    </div>
  </body>
</div>
</template>
<script>
import downFooter from "../components/footer";
import downHeader from "../components/pageDownload/header";
import downBody from "../components/pageDownload/body";

export default {

  components: {
    downFooter,
    downHeader,
    downBody
  }
}
</script>
