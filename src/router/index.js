import { createRouter, createWebHistory } from "vue-router";
import DailyLessonList from "../views/DailyLessonList.vue";

const routes = [
  {
    alias: "/",
    path: "/DailyLessonList",
    name: "DailyLessonList",
    component: DailyLessonList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const publiclyRoutes = ["login", "registration", "home"];

// router.beforeEach((to) => {
//   const thisUserAuthorized = !!localStorage.getItem("jwtToken");
//   const thisRoutePublic = publiclyRoutes.includes(to.name);

//   thisUserAuthorized || thisRoutePublic
//     ? true
//     : router.push("login");
// });

export default router;
