const routes = [
  { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About') },
  { path: '/dataGrid', name: 'dataGrid', component: () => import(/* webpackChunkName: "about" */ '@/views/DataGrid') },
];

export default routes;
