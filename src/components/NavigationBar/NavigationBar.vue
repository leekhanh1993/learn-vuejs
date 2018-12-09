<template>
  <div class="NavigationBar">
    <nav>
      <div class="nav-wrapper black">
        <router-link to="/" class="brand-logo center">Logo</router-link>
        <!-- <a href="#" class="brand-logo center">Logo</a> -->
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/photos">Photos</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar"
};
</script>
<style scoped>
</style>



