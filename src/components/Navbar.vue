<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/" exact>
              <i class="comment outline icon" /> Home
            </router-link></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lessons" right>
            <b-dropdown-item href="#"
              ><router-link to="/lessons" exact>
                <i class="comment outline icon" /> All Lessons
              </router-link></b-dropdown-item
            >
            <b-dropdown-item href="#">Intro to Biology</b-dropdown-item>
            <b-dropdown-item href="#">Intro to Chemistry</b-dropdown-item>
            <b-dropdown-item href="#">Intro to Physics</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Quizzes" right>
              <b-dropdown-item href="#"
                ><router-link to="/quizzes" exact>
                  <i class="comment outline icon" /> All Quizzes
                </router-link></b-dropdown-item
              >
              <b-dropdown-item href="#">Intro to Biology Quiz</b-dropdown-item>
              <b-dropdown-item href="#"
                >Intro to Chemistry Quiz</b-dropdown-item
              >
              <b-dropdown-item href="#">Intro to Physics Quiz</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout"
                >Sign Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
