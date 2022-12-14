<template>
  <div>
    <SlideCard
      :text="this.slide.text"
      :image="this.slide.image"
      :title="this.slide.title"
      @click="onClick"
    />
  </div>
</template>

<script>
import { api, verifyUser } from "../helpers/helpers";
import SlideCard from "@/components/SlideCard.vue";
import findPosition from "../helpers/helpers";

export default {
  name: "show",
  components: {
    SlideCard,
  },
  data() {
    return {
      slide: {},
      lessons: [],
      studentLessons: [],
      position: "",
    };
  },
  methods: {
    onClick() {
      const studentLessons = api.getStudentLesson();
      const lessons = api.getLessons();
      Promise.all([studentLessons, lessons]).then(
        ([studentLessons, lessons]) => {
          this.studentLessons = studentLessons;
          this.lessons = lessons;
          this.position = studentLessons[0].position;
          this.position++;
          console.log(this.position);
          findPosition(this.position, lessons[0].slides);
        }
      );
    },
  },
  async mounted() {
    this.slide = await api.getSlide(this.$route.params.slideId);
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
};
</script>
