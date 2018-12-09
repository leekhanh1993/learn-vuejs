<template>
  <div class="HomePage">
    <nav>
      <div class="nav-wrapper white">
        <form>
          <div class="input-field">
            <input id="search" type="search" placeholder="Find your beautiful photos">
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    <div class="containerIamge">
      <img :src="divImage" :style="divStyleImage">
    </div>
  </div>
</template>
<script>
import image from "../../images/demo4.jpg";
export default {
  name: "HomePage",
  data() {
    return {
      divImage: image,
      divStyleImage: {
        maxHeight: "10%",
        maxWidth: "100%"
      }
    };
  }
};
</script>
<style scoped>
</style>
