<template>
  <section id="hero" class="backgroundHeight bg-dark mycol">
    <div>
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-white">Thank you for your <br>purchase.</h1>
        </div>
        <br>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="text-whit mb-30" style="text-align:center;">
            <button @click="goIndex" type="primary" class="btn btn--primary btn--rounded">Return</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goIndex () {
      this.$router.push({ name: "index" });
    }
  }
}
</script>


<style>
  .backgroundHeight {
    height:100vh;
  }

  .backgroundHeight h1 {
    font-size: 65px;
    font-weight: 700;
    line-height: 70px;
    text-transform: uppercase;
  }
  .mycol {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>