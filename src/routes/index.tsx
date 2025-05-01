import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Header";
import Display from "./Display";



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [{ path: "/", element: <Display /> }],
  },
]);

export default router;
