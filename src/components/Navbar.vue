<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Atomic Academy</b-navbar-brand>

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
            <b-dropdown-item href="#" disabled
              >Intro to Biology</b-dropdown-item
            >
            <b-dropdown-item disabled> Intro to Chemistry </b-dropdown-item>
            <b-dropdown-item href="#" disabled
              >Intro to Physics</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Quizzes" right>
              <b-dropdown-item href="#"
                ><router-link to="/quizzes" exact>
                  <i class="comment outline icon" /> All Quizzes
                </router-link></b-dropdown-item
              >
              <b-dropdown-item
                :to="{ path: '/quizzes/63994cef2adf2bcb102df2bb' }"
                >Intro to Biology Quiz</b-dropdown-item
              >
              <b-dropdown-item
                :to="{ path: '/quizzes/639aa770603f11cc25f8b5d3' }"
                >Intro to Chemistry Quiz</b-dropdown-item
              >
              <b-dropdown-item
                :to="{ path: '/quizzes/639aa993603f11cc25f8b5d4' }"
                >Intro to Physics Quiz</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item
                ><router-link to="/users/signup" exact>
                  Sign up
                </router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/users/login" exact>
                  Sign In
                </router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/users/landing" exact>
                  Profile
                </router-link></b-dropdown-item
              >
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
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
  data() {
    return {
      loggedIn: false,
    };
  },
  props: {
    login: Boolean,
  },
  watch: {
    login: function (newVal) {
      console.log(newVal);
      this.loggedIn = newVal;
    },
  },
  mounted() {
    this.loggedIn = this._props.login;
  },
  methods: {
    logout() {
      localStorage.clear();
      this.loggedIn = false;
      this.$router.push("/");
    },
  },
};
</script>
