<template>

  <div class="banner jumbotron">
    <div class="darken">
      
      <div class="d-flex fullheight">
          <div class="align-self-center justify-content-center w-100">
            <h1>Hello World</h1>
            <Navbar />
          </div>
      </div>


    </div>
  </div>

</template>

<script>
import Navbar from "@/components/banner/Navbar.vue";
export default {
  name: "Banner",
  components: {
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fullheight {
  height: 100vh;
}
.banner {
  color: white;
  background: url('../assets/banner.jpg') no-repeat;
  background-size: cover;
  padding: 0;
}
.darken {
  color: white;
  background-image: linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.8));
  margin: 0;
}
</style>
