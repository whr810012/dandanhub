import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'hub', component: () => import('@/pages/HubPage.vue') },
    { path: '/toolbox', name: 'toolbox', component: () => import('@/pages/ToolboxPage.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
