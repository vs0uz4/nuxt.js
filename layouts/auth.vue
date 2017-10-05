<script>
export default {
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
          <div class="logo">
            <img src="~/assets/img/logo.png" alt="">
          </div>
          <div class="card">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/config";

  .logo {
    margin: {
      top: 50px;
      bottom: 25px; 
    }
    width: 100%;
    height: 100px;
    text-align: center;
    img {
      height: 100%;
      width: auto;
    }
  }
</style>
