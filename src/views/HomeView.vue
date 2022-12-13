<template>
  <div class="home">
<SampleLessons />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleLessons from "@/components/SampleLessons.vue";

export default {
  name: "HomeView",
  components: {
    SampleLessons,
  }
}
</script>
