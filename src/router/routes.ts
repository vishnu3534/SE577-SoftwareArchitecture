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
        path: '/ImageGallery',
        component: () => import('pages/AppPages/ImageGallery.vue'),
      },
      {
        path: '/PhotoPackages',
        component: () => import('pages/AppPages/PhotoPackages.vue'),
      },
      {
        path: '/PhotoBlog',
        component: () => import('pages/AppPages/PhotoBlog.vue'),
      },
      {
        path: '/ContactDetails',
        component: () => import('pages/AppPages/ContactDetails.vue'),
      },
      {
        path: '/PhotoTypes',
        component: () => import('pages/AppPages/PhotoTypes.vue'),
      },
      {
        path: '/PhotoYear',
        component: () => import('pages/AppPages/PhotoYear.vue'),
      },
      {
        path: '/PhotoByCountry',
        component: () => import('pages/AppPages/PhotoByCountry.vue'),
      },
      {
        path: '/AwardPhotos',
        component: () => import('pages/AppPages/AwardPhotos.vue'),
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
