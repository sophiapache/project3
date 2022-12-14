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
import { api, verifyUser } from "../helpers/helpers";
import SlideCard from "@/components/SlideCard.vue";
import { findPosition } from "../helpers/helpers";

export default {
  name: "show",
  components: {
    SlideCard,
  },
  data() {
    return {
      slide: {},
      lessons: {},
      studentLessons: [],
      position: 0,
      slideId: "",
    };
  },
  methods: {
    // have child emit data to then call this function
    onForwardClick() {
      const studentLessons = api.getStudentLesson();
      const lessons = api.getLesson(this.$route.params.lessonId);
      Promise.all([studentLessons, lessons]).then(
        ([studentLessons, lessons]) => {
          this.studentLessons = studentLessons;
          console.log(lessons);
          this.lessons = lessons;
          if (this.position < this.lessons.slides.length - 1) {
            return;
          } else {
            this.position++;
            console.log(this.position);
            this.slideId = findPosition(this.position, lessons.slides);
            console.log(this.slideId);
            this.$router.push(
              `/${this.$route.params.lessonId}/${this.slideId}`
            );
            const slides = api.getSlide(this.slideId).then((slides) => {
              this.slide = slides;
            });
          }
        }
      );
    },
    onBackClick() {
      const studentLessons = api.getStudentLesson();
      const lessons = api.getLesson(this.$route.params.lessonId);
      Promise.all([studentLessons, lessons]).then(
        ([studentLessons, lessons]) => {
          this.studentLessons = studentLessons;
          this.lessons = lessons;
          if (this.position === 0) {
            return;
          } else {
            this.position--;
            console.log(this.position);
            this.slideId = findPosition(this.position, this.lessons.slides);
            console.log(this.slideId);
            this.$router.push(
              `/${this.$route.params.lessonId}/${this.slideId}`
            );
            const slides = api.getSlide(this.slideId).then((slides) => {
              this.slide = slides;
            });
          }
        }
      );
    },
  },
  async mounted() {
    this.slide = await api.getSlide(this.$route.params.slideId);
    const studentLessons = api.getStudentLesson().then((studentLesson) => {
      console.log(studentLesson[0].position);
      this.position = studentLesson[0].position;
    });
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
};
</script>
