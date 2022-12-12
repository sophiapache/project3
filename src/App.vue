<template>
  <div id="app">
    <nav>
      <Navbar />
    </nav>
    <div class="banner">
      <img
        src="https://thumbs.dreamstime.com/b/female-college-student-working-academic-research-close-up-female-college-student-working-academic-research-school-154308272.jpg"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.1em;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
