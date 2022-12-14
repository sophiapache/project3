<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h2>your email is {{ email }}</h2>
    <h3>your ID is {{ id }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LandingView",
  props: {
    user: Object,
  },
  data() {
    return {
      name: "",
      email: "",
      id: "",
    };
  },
  mounted() {
    this.name = this._props.user.name;
    this.email = this._props.user.email;
    this.id = this._props.user.id;
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
};
</script>
