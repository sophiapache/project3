<template>
  <div class="hello">
    <h2>Sample Tutorials</h2>
    <div>
      <div class="mt-4">
        <b-card-group deck>
          <b-card
            img-src="https://i.imgur.com/VYUK47J.jpeg"
            img-alt="Card image"
            img-left
            class="card"
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
            class="card"
          >
            <b-card-text>
              <h1>Intro to Chemistry</h1>
              Chemistry is the study of matter and the ways in which different
              forms of matter combine with each other. You study chemistry
              because it helps you to understand the world around you. Study
              these lessons to learn more about chemistry.
            </b-card-text>
          </b-card>

          <b-card
            img-src="https://i.imgur.com/EUAuqja.jpeg"
            img-alt="Card image"
            img-left
            class="card"
          >
            <h1>Intro to Physics</h1>
            <b-card-text>
              Physics is concerned with describing the interactions of energy,
              matter, space, and time, and it is especially interested in what
              fundamental mechanisms underlie every phenomenon. Interested?
              Learn more here!
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://i.imgur.com/VYUK47J.jpeg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Intro to Biology">
                <b-card-text>
                  Biologists study life at many scales, from individual cells to
                  organisms to the entire biosphere (planet Earth). Jump in to
                  learn more about the key themes of biology and the properties
                  of living things.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://i.imgur.com/cwJwqh8.jpeg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Intro to Chemistry">
                <b-card-text>
                  Chemistry is the study of matter and the ways in which
                  different forms of matter combine with each other. You study
                  chemistry because it helps you to understand the world around
                  you. Study these lessons to learn more about chemistry.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://i.imgur.com/EUAuqja.jpeg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Intro to Physics">
                <b-card-text>
                  Physics is concerned with describing the interactions of
                  energy, matter, space, and time, and it is especially
                  interested in what fundamental mechanisms underlie every
                  phenomenon. Interested? Learn more here!
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
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
.card {
  margin-bottom: 20px;
  box-shadow: 0px 10px 5px rgb(131, 131, 131);
}

.mt-4 {
  opacity: 0.8;
}

.b-card {
  padding: 1em;
}
h1 {
  color: lightslategray;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
h3 {
  margin: 40px 0 0;
}
h2 {
  color: lightslategray;
  padding-top: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 300%;
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

.overflow-hidden {
  visibility: hidden;
  display: none;
}

@media screen and (max-width: 600px) {
  .overflow-hidden {
    visibility: visible;
    display: inline-block;
  }

  .card-deck {
    display: none;
  }

  h2 {
    font-size: 200%;
  }
}
</style>
