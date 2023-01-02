<template>
  <div id="app">
    <nav>
      <Navbar :login="this.login" />
    </nav>
    <div class="banner">
      <img
        src="https://thumbs.dreamstime.com/b/female-college-student-working-academic-research-close-up-female-college-student-working-academic-research-school-154308272.jpg"
        class="bannerimg"
      />
    </div>
    <loading v-if="loading" />
    <router-view
      v-else
      :user="user"
      @userLogin="userLogin"
      :lessons="lessons"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { api } from "./helpers/helpers";
import Loading from "./components/Loading.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Loading,
  },
  async mounted() {
    try {
      await this.updateUser();
      await this.updateLessons();
      await this.updateStudentLessons();
    } catch (err) {
      console.log(err);
    } finally {
      console.log("user", this.user);
      console.log("lessons", this.lessons);
      this.loading = false;
    }
  },
  methods: {
    userLogin(user) {
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.id = user.id;
      this.updateStudentLessons();
    },
    async updateUser() {
      const res = await api.getUser();
      this.user.name = res.data.user.name;
      this.user.email = res.data.user.email;
      this.user.id = res.data.user.id;
    },
    async updateLessons() {
      const res = await api.getLessons();
      this.lessons = res;
    },
    async updateStudentLessons() {
      for (let i = 0; i < this.lessons.length; i++) {
        const studentLesson = await api.findStudentLessons({
          lesson: this.lessons[i]._id,
          user: this.user.id,
        });
        this.user.studentLessons.push(studentLesson.data[0]);
        this.lessons[i].position = studentLesson.data[0].position;
        // console.log(this.lessons[i]);
      }
    },
  },
  data() {
    return {
      loading: true,
      user: {
        email: "",
        name: "",
        id: null,
        studentLessons: [],
      },
      lessons: [],
      login: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.1em;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
.banner {
  box-shadow: 0px 10px 5px rgb(131, 131, 131);
}

.bannerimg {
  width: 100vw;
}
</style>
