<template>
  <div class="background">
    <h1>Hello {{ user.name }}!</h1>
    <h2>Your email is {{ user.email }}.</h2>
    <h3>Your student ID is {{ user.id }}.</h3>
    <div
      v-for="(studentLesson, i) in studentLessons"
      :key="studentLessons[i].lessonId"
      class="badges"
    >
      <span v-if="studentLessons[i].grade">
        <font-awesome-icon
          icon="fa-solid fa-frog"
          v-if="
            studentLessons[i].lessonId === '6396843b46e9febd191de195' &&
            studentLessons[i].studentId === user.id
          "
          class="icons"
          id="frog"
        />
        <font-awesome-icon
          icon="fa-solid fa-flask"
          v-if="
            studentLessons[i].lessonId === '63985be0caf55d7fa5cd9d4c' &&
            studentLessons[i].studentId === user.id
          "
          class="icons"
          id="flask"
        />
        <font-awesome-icon
          icon="fa-solid fa-atom"
          v-if="
            studentLessons[i].lessonId === '63985d32caf55d7fa5cd9d50' &&
            studentLessons[i].studentId === user.id
          "
          class="icons"
          id="atom"
        />
      </span>
    </div>
    <h3>Quiz Grades:</h3>
    <div
      v-for="(studentLesson, i) in studentLessons"
      :key="studentLessons[i]._id"
    >
      <span
        v-if="
          studentLessons[i].lessonId === '6396843b46e9febd191de195' &&
          studentLessons[i].grade
        "
      >
        <strong>Intro to Biology Quiz:</strong> {{ studentLesson.grade }}
      </span>
      <span
        v-if="
          studentLessons[i].lessonId === '63985be0caf55d7fa5cd9d4c' &&
          studentLessons[i].grade
        "
      >
        <strong>Intro to Chemistry Quiz:</strong> {{ studentLesson.grade }}
      </span>
      <span
        v-if="
          studentLessons[i].lessonId === '63985d32caf55d7fa5cd9d50' &&
          studentLessons[i].grade
        "
      >
        <strong>Intro to Physics Quiz:</strong> {{ studentLesson.grade }}
      </span>
    </div>
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
      userDetails: {},
      name: "",
      email: "",
      id: "",
      studentLessons: [],
    };
  },
  mounted() {
    this.updateDetails();
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
  methods: {
    updateDetails() {
      this.studentLessons = this._props.user.studentLessons;
    },
  },
};
</script>

<style scoped>
.background {
  width: 50vw;
  padding: 2em;
  text-align: center;
  position: relative;
  left: 25%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
}

h1,
h2,
h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.icons {
  font-size: 800%;
  padding: 0.3em;
}

.badges {
  display: inline-block;
}

#frog {
  color: green;
}

#atom {
  color: purple;
}

#flask {
  color: blue;
}

@media screen and (max-width: 600px) {
  .background {
    width: 100vw;
    left: 0%;
  }
}
</style>
