<template>
  <div>
    <font-awesome-icon icon="fa-solid fa-frog" />

    <h1>Hello {{ name }}</h1>
    <h2>your email is {{ email }}</h2>
    <h3>your ID is {{ id }}</h3>
    <div v-for="(studentLesson, i) in studentLessons" :key="i">
      <span v-if="studentLessons[i].grade">
        <font-awesome-icon
          icon="fa-solid fa-frog"
          v-if="studentLessons[i].lessonId === '6396843b46e9febd191de195'"
        />
      </span>
    </div>
    <li v-for="(studentLesson, i) in studentLessons" :key="i">
      {{ studentLesson.lessonId }}: {{ studentLesson.grade }}
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import { api } from "../helpers/helpers";

export default {
  name: "LandingView",
  props: {
    user: Object,
  },
  data() {
    return {
      name: "",
      email: "",
      id: "",
      studentLessons: [],
    };
  },
  async mounted() {
    const studentLessons = await api.getStudentLessons({
      user: this._props.user.id,
    });
    this.studentLessons = studentLessons.data;
    this.name = this._props.user.name;
    this.email = this._props.user.email;
    this.id = this._props.user.id;
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
};
</script>
