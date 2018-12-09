<template>
  <div id="app">
    <NavigationBar/>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about/Lee Khanh">About</router-link>
    </nav>
    <router-view/> -->
    <router-view/>
    <FooterPage/>
    
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar/NavigationBar.vue";
import FooterPage from "./components/FooterPage/FooterPage.vue"
// import HomePage from "./components/HomePage/HomePage.vue"

export default {
  name: "app",
  components: {
    NavigationBar,
    FooterPage
  }
};
</script>

<style>
</style>
