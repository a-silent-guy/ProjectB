import VueRouter from "vue-router";
import Test from "../views/Test.vue";
import Test1 from "../views/Test1.vue";
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Test,
    },
    {
      path: "/test1",
      component: Test1,
    },
  ],
});

export default router;
