<template>
  <div class="container">
    <form @submit.prevent="login">
      <p>Welcome</p>
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        id="email-input-1"
        required
      /><br />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        id="password-input-1"
        required
      /><br />
      <input type="submit" value="Login" /><br />
      {{ error }}
    </form>

    <div class="drops">
      <div class="drop drop-1"></div>
      <div class="drop drop-2"></div>
      <div class="drop drop-3"></div>
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await api.loginUser(user);
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          console.log("success");
          this.$router.push("/users/landing");
        }
      } catch (err) {
        console.error(err.response);
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
<style scoped lang="scss">
// .form-container {
//   width: 80%;
//   max-width: 800px;
//   margin: 0 auto;
// }
$white: rgba(255, 255, 255, 0.3);

body {
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  height: 100vh;
  font-family: "Montserrat", sans-serif;
}

.container {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

form {
  background: $white;
  padding: 3em;
  height: 550px;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  p {
    font-weight: 500;
    color: rgb(53, 53, 53);
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: #ddd;
    font-size: 12px;

    &:hover {
      text-shadow: 2px 2px 6px #00000040;
    }

    &:active {
      text-shadow: none;
    }
  }

  input {
    background: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }

    &[type="email"],
    &[type="password"] {
      &:focus {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &[type="button"] {
      margin-top: 10px;
      width: 150px;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  &:hover {
    margin: 4px;
  }
}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.drop {
  background: $white;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: all 0.2s ease;

  &-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }

  &-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }

  &-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }

  &-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }

  &-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }
}

a,
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
