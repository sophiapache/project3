<template>
  <form @submit.prevent="onSubmit">
    {{ quizzes.name }}
    <b-form-group
      v-for="(quiz, i) in quizzes.Questions"
      :label="quiz.Question"
      v-slot="{ ariaDescribedby }"
      :key="i"
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
    <button>Submit</button>
  </form>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "ShowQuiz",
  data() {
    return {
      quizzes: [],
      answers: [],
      selected: [],
    };
  },
  methods: {
    onSubmit() {
      // for (i=0;i<this.quizzes.Questions.length;i++) {
      //   if (this.quizzes.Questions.attempt === )
      // }
    },
    attempt(e, i) {
      this.quizzes.Questions[i].attempt = e;
    },
  },
  async mounted() {
    this.quizzes = await api.getQuiz(this.$route.params.quizId);
    this.quizzes.Questions.forEach((q) => (q.attempt = null));
    console.log(this.quizzes.Questions);
    // this.questions = this.quizzes.Questions;
  },
};
</script>
