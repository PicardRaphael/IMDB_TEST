const routes = [
  {
    path: "/",
    exact: true,
    key: "home",
    component: "container/MoviesContainer",
  },
  {
    path: "/popular",
    key: "popular",
    component: "container/PopularContainer",
  },
  {
    path: "*",
    key: "404",
    component: "component/Page404"
  }
];

export default routes;