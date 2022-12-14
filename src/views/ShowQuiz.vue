<template>
  <div>
    {{ quizzes.name }}
    <b-form-group
      v-for="(quiz, i) in quizzes.Questions"
      :label="quiz.Question"
      v-slot="{ ariaDescribedby }"
      :key="i"
    >
      <b-form-radio
        v-model="selected1"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="A"
        >{{ quiz.A1 }}</b-form-radio
      >
      <b-form-radio
        v-model="selected1"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="B"
        >{{ quiz.A2 }}</b-form-radio
      >
      <b-form-radio
        v-model="selected2"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="C"
        >{{ quiz.A3 }}</b-form-radio
      >
    </b-form-group>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "ShowQuiz",
  data() {
    return {
      quizzes: [],
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      selected5: "",
    };
  },
  async mounted() {
    this.quizzes = await api.getQuiz(this.$route.params.quizId);
  },
};
</script>
