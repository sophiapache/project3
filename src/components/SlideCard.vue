<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item active>Summary</b-nav-item>
          <b-nav-item
            :to="{
              name: 'video',
              params: {
                lessonId: this.$route.params.lessonId,
                slideId: this.$route.params.slideId,
              },
            }"
            >Video</b-nav-item
          >
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <img :src="image" class="slideimage" />
        <b-card-title>{{ title }}</b-card-title>

        <b-card-text>
          {{ text }}
        </b-card-text>
        <div class="controls">
          <b-icon icon="caret-left" @click="onBackClick"></b-icon>
          <b-icon icon="caret-right" @click="onForwardClick"></b-icon>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SlideCard",
  props: {
    text: String,
    image: String,
    title: String,
    lessonId: String,
    slideId: String,
  },
  methods: {
    onForwardClick() {
      console.log("forward");
      this.$emit("forward");
    },
    onBackClick() {
      console.log("back");
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.text-center {
  padding: 5em 10em 5em 10em;
}

.controls {
  display: flex;
  font-size: 250%;
  justify-content: space-between;
  padding-top: 2em;
}

.slideimage {
  width: 800px;
  height: 300px;
}
</style>
