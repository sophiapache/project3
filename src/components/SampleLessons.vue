<template>
  <div class="hello">
    <h1>Sample Tutorials</h1>
    <div>
      <div class="mt-4">
        <b-card
          img-src="https://i.imgur.com/VYUK47J.jpeg"
          img-alt="Card image"
          img-left
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>

        <b-card
          img-src="https://i.imgur.com/cwJwqh8.jpeg"
          img-alt="Card image"
          img-right
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
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
  color: white;
}
h3 {
  margin: 40px 0 0;
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
