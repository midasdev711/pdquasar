
/* Remove
function loadAssetData (to, from, next) {
  commit('setIsLoadingAssetData', true);
  this.$axios.get('https://run.mocky.io/v3/e89da56b-60e4-4e5b-9552-05b1590f87ef')
    .then((response) => {
      console.log(response);
      commit('assets Data', response.data);
      commit('setIsLoadingAssetData', false);

    })
    .catch((error) => console.log(error))
}
*/
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', name: 'Index', meta: { requiresAuth: true }, component: () => import('pages/Index.vue') },
      {
        path: '/assets', name: 'Assets', meta: { requiresAuth: true }, component: () => import('pages/Assets.vue')
      },
      {
        path: '/calibrations', name: 'Calibrations', meta: { requiresAuth: true }, component: () => import('pages/Calibrations.vue')
      }
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    name: "Auth",
    redirect: "/auth/login",
    children: [
      { path: '/login', name: 'Login', component: () => import('pages/Login.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
