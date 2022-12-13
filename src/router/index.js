import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonView from "../views/LessonView.vue";
import QuizView from "../views/QuizView.vue";
import ShowLesson from "../views/ShowLesson.vue";
import ShowSlideVideo from "../views/ShowSlideVideo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
