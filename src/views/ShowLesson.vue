<template>
  <div>
    <SlideCard
      :text="this.slide.text"
      :image="this.slide.image"
      :title="this.slide.title"
    />
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
import SlideCard from "@/components/SlideCard.vue";

export default {
  name: "show",
  components: {
    SlideCard,
  },
  data() {
    return {
      slide: {},
    };
  },
  async mounted() {
    this.slide = await api.getSlide(this.$route.params.slideId);
  },
};
</script>
