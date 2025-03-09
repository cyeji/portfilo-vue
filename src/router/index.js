import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashBoard.vue'),
    },
    {
      path: '/projects',
      name: 'project-list',
      component: () => import('../components/Project.vue'), // 프로젝트 목록 페이지
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('../components/ProjectDetail.vue'), // 프로젝트 상세 페이지
      props: true, // URL 파라미터를 컴포넌트의 props로 전달
    },
  ],
})

export default router
