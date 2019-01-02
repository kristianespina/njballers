<template>

  <div class="banner jumbotron fullheight">
    <div class="darken fullheight">
      
      <div class="container d-flex h-100">
        <div class="row w-100">
          <div class="col-12 justify-content-center">
            <Navbar />
          </div>
          <div class="col-12 my-auto">
            <h1>Hello World</h1>
          </div>
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
