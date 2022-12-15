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
import { findPosition } from "../helpers/helpers";

export default {
  name: "show",
  components: {
    SlideCard,
  },
  props: {
    user: Object,
  },
  data() {
    return {
      slide: {},
      lessons: {},
      studentLesson: {},
      position: 0,
      slideId: "",
      studentPosition: 0,
    };
  },
  methods: {
    // have child emit data to then call this function
    onForwardClick() {
      api.getLesson(this.$route.params.lessonId).then((lessons) => {
        this.lessons = lessons;
        if (this.position >= this.lessons.slides.length - 1) {
          return;
        } else {
          this.position++;
          if (this.position > this.studentPosition) {
            api.updateStudentLesson({
              position: this.position,
              _id: this.studentLesson._id,
            });
          }
          this.slideId = findPosition(this.position, lessons.slides);
          this.$router.push(`/${this.$route.params.lessonId}/${this.slideId}`);
          const slides = api.getSlide(this.slideId).then((slides) => {
            this.slide = slides;
          });
        }
      });
    },
    onBackClick() {
      api.getLesson(this.$route.params.lessonId).then((lessons) => {
        this.lessons = lessons;
        if (this.position === 0) {
          return;
        } else {
          this.position--;
          this.slideId = findPosition(this.position, this.lessons.slides);
          this.$router.push(`/${this.$route.params.lessonId}/${this.slideId}`);
          const slides = api.getSlide(this.slideId).then((slides) => {
            this.slide = slides;
          });
        }
      });
    },
  },
  async mounted() {
    const studentLesson = await api.findStudentLessons({
      user: this._props.user.id,
      lesson: this.$route.params.lessonId,
    });
    this.studentLesson = studentLesson.data[0];
    this.slide = await api.getSlide(this.$route.params.slideId);
    this.position = this.studentLesson.position;
    this.studentPosition = this.studentLesson.position;
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
};
</script>
