const routes = [
  {
    path: "/",
    exact: true,
    key: "home",
    component: "container/MoviesContainer",
  },
  {
    path: "/top-10",
    key: "popular",
    component: "container/BestMoviesContainer",
  },
  {
    path: "*",
    key: "404",
    component: "component/Page404",
  },
];

export default routes;
