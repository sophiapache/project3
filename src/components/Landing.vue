<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h2>your email is {{ email }}</h2>
    <h3>your ID is {{ id }}</h3>
  </div>
</template>
<script>
import { api } from "../helpers/helpers";
export default {
  name: "landing",
  data() {
    return {
      name: "",
      email: "",
      id: "",
    };
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/users/login");
    }
  },
  async mounted() {
    try {
      const res = await api.getUser();
      this.name = res.data.user.name;
      this.email = res.data.user.email;
      this.id = res.data.user.id;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
