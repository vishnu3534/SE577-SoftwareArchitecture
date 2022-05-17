import { RouteConfig } from 'vue-router';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/Home.vue') },
      { path: 'home', component: () => import('pages/AppPages/Home.vue') },
      { path: 'contact', component: () => import('pages/AppPages/contact.vue') },
      { path: 'photoblog', component: () => import('pages/AppPages/photoblog.vue') },
      { path: 'imagegallery', component: () => import('pages/AppPages/imagegallery.vue') },
      { path: 'photopackages', component: () => import('pages/AppPages/photopackages.vue') },
      { path: 'phototypes', component: () => import('pages/AppPages/phototypes.vue') },
      { path: 'gitrepos', component: () => import('pages/AppPages/fetchrepos.vue') },
      { path: 'photoyear', component: () => import('pages/AppPages/photoyear.vue') },
      { path: 'photobycountry', component: () => import('pages/AppPages/photobycountry.vue') },
      { path: 'awardphotos', component: () => import('pages/AppPages/awardphotos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
