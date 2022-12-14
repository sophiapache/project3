import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LessonView from "../views/LessonView.vue";
import QuizView from "../views/QuizView.vue";
import ShowQuiz from "../views/ShowQuiz.vue";
import ShowLesson from "../views/ShowLesson.vue";
import ShowSlideVideo from "../views/ShowSlideVideo.vue";
import LandingView from "../views/LandingView";
import LoginView from "../views/LoginView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/users/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/users/landing",
    name: "landing",
    component: LandingView,
  },

  {
    path: "/lessons",
    name: "lessons",
    component: LessonView,
  },
  {
    path: "/quizzes",
    name: "quizzes",
    component: QuizView,
  },
  {
    path: "/quizzes/:quizId",
    name: "showQuiz",
    component: ShowQuiz,
  },
  {
    path: "/:lessonId/:slideId",
    name: "show",
    component: ShowLesson,
  },

  {
    path: "/:lessonId/:slideId/video",
    name: "video",
    component: ShowSlideVideo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
