import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/HomePage.vue') },
      {
        path: '/HomePage',
        component: () => import('pages/AppPages/HomePage.vue'),
      },
      {
        path: '/ContactDetails',
        component: () => import('pages/AppPages/ContactDetails.vue'),
      },
      {
        path: '/listrepos',
        component: () => import('src/pages/AppPages/GithubPage.vue'),
      },
      {
        path: '/Auth',
        component: () => import('pages/AppPages/AuthorizedPage.vue'),
      },
      {
        path: '/Unauth',
        component: () => import('pages/AppPages/UnauthorizedPage.vue'),
      },
      {
        path: '/authrepos',
        component: () => import('pages/AppPages/GitRepos.vue'),
      },
      {
        path: '/authbranches',
        component: () => import('pages/AppPages/GitBranches.vue'),
      },
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
