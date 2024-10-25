import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: 'classes', component: () => import('pages/ClassesList.vue') },
      {
        path: 'membership',
        component: () => import('pages/MembershipPrices.vue'),
      },
      { path: 'showcase', component: () => import('pages/GymShowcase.vue') },
      { path: 'location', component: () => import('pages/ContactInfo.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
