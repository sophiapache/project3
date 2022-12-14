<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item
            :to="{
              name: 'show',
              params: {
                lessonId: this.$route.params.lessonId,
                slideId: this.$route.params.slideId,
              },
            }"
            >Summary</b-nav-item
          >
          <b-nav-item active>Video</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <b-card-title>{{ title }}</b-card-title>

        <b-card-text>
          <iframe
            width="560"
            height="315"
            v-bind:src="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "VideoSlideCard",
  props: {
    video: String,
    title: String,
  },
};
</script>
