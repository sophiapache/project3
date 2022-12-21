<template>
  <form @submit.prevent="onSubmit">
    <h1>{{ quizzes.name }}</h1>
    <b-form-group
      v-for="(quiz, i) in quizzes.Questions"
      :label="quiz.Question"
      v-slot="{ ariaDescribedby }"
      :key="i"
      id="fieldset-1"
      class="question"
    >
      <b-form-radio
        :aria-describedby="ariaDescribedby"
        :name="quiz.Question"
        :value="quiz.A1"
        @change="attempt($event, i)"
        >{{ quiz.A1 }}</b-form-radio
      >
      <b-form-radio
        :aria-describedby="ariaDescribedby"
        :name="quiz.Question"
        :value="quiz.A2"
        @change="attempt($event, i)"
        >{{ quiz.A2 }}</b-form-radio
      >
      <b-form-radio
        :aria-describedby="ariaDescribedby"
        :name="quiz.Question"
        :value="quiz.A3"
        @change="attempt($event, i)"
        >{{ quiz.A3 }}</b-form-radio
      >
    </b-form-group>
    <b-button size="lg" pill type="submit">Submit</b-button>
  </form>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  props: {
    user: Object,
  },
  name: "ShowQuiz",
  data() {
    return {
      quizzes: [],
      answers: [],
      selected: [],
      studentLesson: {},
    };
  },
  methods: {
    onSubmit() {
      console.log("hello");
      let score = 0;
      for (let i = 0; i < this.quizzes.Questions.length; i++) {
        if (
          this.quizzes.Questions[i].attempt === this.quizzes.Questions[i].CA
        ) {
          score += 20;
        }
      }
      api.updateStudentLesson({ _id: this.studentLesson._id, grade: score });
      this.$router.push("/quizzes");
    },
    attempt(e, i) {
      this.quizzes.Questions[i].attempt = e;
    },
  },
  async mounted() {
    this.quizzes = await api.getQuiz(this.$route.params.quizId);
    this.quizzes.Questions.forEach((q) => (q.attempt = null));
    this.studentLesson = await this._props.user.studentLessons.find(
      (studentLesson) => studentLesson.lessonId === this.$route.params.lessonId
    );
  },
};
</script>

<style scoped>
form {
  width: 50vw;
  text-align: center;
  position: relative;
  left: 25%;
}
.form-group {
  padding: 5em;
}

#fieldset-1 {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
}

.col-form-label {
  font-weight: bolder;
  font-style: italic;
}
h1 {
  padding-top: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
