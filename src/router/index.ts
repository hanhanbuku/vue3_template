import { createRouter, createWebHashHistory, RouterOptions } from "vue-router"

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/about",
      name: "关于我们",
      redirect: "/about/1",
      component: () => import("@/views/about/index.vue"),
      children: [
        {
          path: "/about/1",
          component: () => import("@/views/about/about1.vue"),
          meta: {
            title: "about1",
          },
        },
        {
          path: "/about/2",
          component: () => import("@/views/about/about2.vue"),
          meta: {
            title: "about2",
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/404/index.vue"),
    },
  ],
})

export default router
