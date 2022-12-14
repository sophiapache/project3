import axios from "axios";
import Vue from "vue";
import FlashMessage from "@smartweb/vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";

Vue.use(FlashMessage, {
  // name: String,
  // tag: String,
  time: Number,
  strategy: String,
});
// import VueFlashMessage from "vue-flash-message";
// import "vue-flash-message/dist/vue-flash-message.min.css";

// Vue.use(VueFlashMessage, {
//   messageOptions: {
//     timeout: 3000,
//     pauseOnInteract: true,
//   },
// });

const vueInstance = new Vue();
const baseLessonURL = "http://localhost:3000/lessons/";
const baseQuizURL = "http://localhost:3000/quizzes/";
const baseSlideURL = "http://localhost:3000/slides/";
const baseStudentLessonURL = "http://localhost:3000/studentlessons/";
const userURL = "http://localhost:3000/users/";
const loginURL = "http://localhost:3000/login/";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      vueInstance.flashMessage.show({
        status: error.response.status,
        title: error.response.statusText,
      });
    });

export const api = {
  getLesson: handleError(async (id) => {
    const res = await axios.get(baseLessonURL + id);
    return res.data;
  }),
  getLessons: handleError(async () => {
    const res = await axios.get(baseLessonURL);
    return res.data;
  }),
  getQuiz: handleError(async (id) => {
    const res = await axios.get(baseQuizURL + id);
    return res.data;
  }),
  getQuizzes: handleError(async () => {
    const res = await axios.get(baseQuizURL);
    return res.data;
  }),
  getSlide: handleError(async (id) => {
    const res = await axios.get(baseSlideURL + id);
    return res.data;
  }),
  getStudentLesson: handleError(async () => {
    const res = await axios.get(baseStudentLessonURL);
    return res.data;
  }),
  createUser: async (payload) => {
    const res = await axios.post(userURL, payload);
    return res.data;
  },
  loginUser: async (payload) => {
    const res = await axios.post(loginURL, payload);
    return res;
  },
  getUser: async () => {
    const res = await axios.get(userURL, {
      headers: { token: localStorage.getItem("token") },
    });
    return res;
  },
};
export const findPosition = (position, slides) => {
  const currentSlide = slides[position];
  return currentSlide;
};

export const verifyUser = async () => {
  try {
    const res = await api.getUser();
    this.name = res.data.user.name;
    this.email = res.data.user.email;
    this.id = res.data.user.id;
  } catch (err) {
    console.log(err);
  }
};
