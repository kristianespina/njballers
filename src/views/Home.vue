<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <Banner />
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Banner />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  components: {
    Banner,
  }
};
</script>
