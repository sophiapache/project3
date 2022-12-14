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
const baseLessonURL = "https://atomic-academy-server.herokuapp.com/lessons/";
const baseQuizURL = "https://atomic-academy-server.herokuapp.com/quizzes/";
const baseSlideURL = "https://atomic-academy-server.herokuapp.com/slides/";
const baseStudentLessonsURL =
  "https://atomic-academy-server.herokuapp.com/studentlessons/";
const baseStudentLessonURL =
  "https://atomic-academy-server.herokuapp.com/studentlesson/";
const userURL = "https://atomic-academy-server.herokuapp.com/users/";
const loginURL = "https://atomic-academy-server.herokuapp.com/login/";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.log("erorr", error);
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
    console.log(res.data);
    return res.data;
  }),
  getSlide: handleError(async (id) => {
    const res = await axios.get(baseSlideURL + id);
    return res.data;
  }),
  updateStudentLesson: async (payload) => {
    console.log(payload);
    const res = await axios.put(baseStudentLessonURL + payload._id, payload);
    return res.data;
  },
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
  findStudentLessons: handleError(async (ids) => {
    // console.log(ids);
    let res = await axios.get(
      `${baseStudentLessonURL}?lesson=${ids.lesson}&user=${ids.user}`
    );
    if (res.data.length === 0) {
      res = api.createStudentLesson(ids);
    }
    return res;
  }),
  createStudentLesson: async (payload) => {
    const res = await axios.post(baseStudentLessonsURL, payload);
    return res;
  },
  getStudentLessons: async (ids) => {
    // console.log(ids);
    let res = await axios.get(`${baseStudentLessonsURL}?user=${ids.user}`);
    return res;
  },
};
export const findPosition = (position, slides) => {
  const currentSlide = slides[position];
  return currentSlide;
};
