<template>
  <div class="hello">
    <h2>Sample Tutorials</h2>
    <div>
      <div class="mt-4">
        <b-card
          img-src="https://i.imgur.com/VYUK47J.jpeg"
          img-alt="Card image"
          img-left
        >
          <h1>Intro to Biology</h1>
          <b-card-text>
            Biologists study life at many scales, from individual cells to
            organisms to the entire biosphere (planet Earth). Jump in to learn
            more about the key themes of biology and the properties of living
            things.
          </b-card-text>
        </b-card>

        <b-card
          img-src="https://i.imgur.com/cwJwqh8.jpeg"
          img-alt="Card image"
          img-right
        >
          <b-card-text>
            <h1>Intro to Chemistry</h1>
            Chemistry is the study of matter and the ways in which different
            forms of matter combine with each other. You study chemistry because
            it helps you to understand the world around you. Study these lessons
            to learn more about chemistry.
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleLessons",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-4 {
  opacity: 0.8;
  padding: 1em;
}

.b-card {
  padding: 1em;
}
h1 {
  color: lightslategray;
}
h3 {
  margin: 40px 0 0;
}
h2 {
  color: white;
  padding-top: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
