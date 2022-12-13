<template>
  <div>
    <SlideCard
      :text="this.slide.text"
      :image="this.slide.image"
      :title="this.slide.title"
      @forward="onForwardClick"
      @back="onBackClick"
    />
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
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
      position: 0,
      slideId: "",
    };
  },
  methods: {
    // have child emit data to then call this function
    onForwardClick() {
      console.log("hello");
      const studentLessons = api.getStudentLesson();
      const lessons = api.getLessons();
      Promise.all([studentLessons, lessons]).then(
        ([studentLessons, lessons]) => {
          this.studentLessons = studentLessons;
          this.lessons = lessons;
          this.position = studentLessons[0].position;
          console.log(this.position);
          this.position++;
          console.log(this.position);
          this.slideId = findPosition(this.position, lessons[0].slides);
        }
      );
    },
    onBackClick() {
      console.log("hello");
      const studentLessons = api.getStudentLesson();
      const lessons = api.getLessons();
      Promise.all([studentLessons, lessons]).then(
        ([studentLessons, lessons]) => {
          this.studentLessons = studentLessons;
          this.lessons = lessons;
          this.position = studentLessons[0].position;
          console.log(this.position);
          this.position--;
          console.log(this.position);
          this.slideId = findPosition(this.position, lessons[0].slides);
        }
      );
    },
  },
  async mounted() {
    this.slide = await api.getSlide(this.$route.params.slideId);
  },
};
</script>
