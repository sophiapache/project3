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
    lessons: Array,
  },
  data() {
    return {
      slide: {},
      lesson: {},
      // lessons: {},
      studentLesson: {},
      position: 0,
      slideId: "",
      studentPosition: 0,
    };
  },
  methods: {
    // have child emit data to then call this function
    onForwardClick() {
      if (this.position >= this.lesson.slides.length - 1) {
        return;
      } else {
        this.position++;
        if (this.position > this.studentPosition) {
          api.updateStudentLesson({
            position: this.position,
            _id: this.studentLesson._id,
          });
        }
        this.slideId = findPosition(this.position, this.lesson.slides);
        this.$router.push(`/${this.$route.params.lessonId}/${this.slideId}`);
        const slides = api.getSlide(this.slideId).then((slides) => {
          this.slide = slides;
          console.log("forward");
        });
      }
    },
    onBackClick() {
      if (this.position === 0) {
        return;
      } else {
        this.position--;
        this.slideId = findPosition(this.position, this.lesson.slides);
        this.$router.push(`/${this.$route.params.lessonId}/${this.slideId}`);
        const slides = api.getSlide(this.slideId).then((slides) => {
          this.slide = slides;
          console.log("back");
        });
      }
    },
  },
  async mounted() {
    this.lesson = await this._props.lessons.find(
      (lesson) => lesson._id === this.$route.params.lessonId
    );
    this.studentLesson = await this._props.user.studentLessons.find(
      (studentLesson) => studentLesson.lessonId === this.$route.params.lessonId
    );
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
