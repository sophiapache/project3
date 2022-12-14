<template>
  <div>
    <VideoSlideCard
      :text="this.slide.text"
      :image="this.slide.image"
      :title="this.slide.title"
      :video="this.slide.video"
    />
  </div>
</template>

<script>
import { api, verifyUser } from "../helpers/helpers";
import VideoSlideCard from "@/components/VideoSlideCard.vue";

export default {
  name: "show",
  components: {
    VideoSlideCard,
  },
  data() {
    return {
      slide: {},
    };
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
