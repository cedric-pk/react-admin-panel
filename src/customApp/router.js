import asyncComponent from "../helpers/AsyncFunc";

const routes = [
  {
    path: "userformular",
    component: asyncComponent(() => import("./containers/Userformular"))
  }
];
export default routes;
