import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [],
  },
]);

export default router;
