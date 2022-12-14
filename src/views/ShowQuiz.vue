<template>
  <div>
    {{ quizzes.name }}
    <b-form-group
      :label="quizzes.Questions[0].Question"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio
        v-model="selected1"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="A"
        >Option A</b-form-radio
      >
      <b-form-radio
        v-model="selected1"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="B"
        >Option B</b-form-radio
      >
    </b-form-group>
    <b-form-group
      :label="quizzes.Questions[1].Question"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio
        v-model="selected2"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="A"
        >Option A</b-form-radio
      >
      <b-form-radio
        v-model="selected2"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="B"
        >Option B</b-form-radio
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
      quizzes: {},
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
