import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateDetailsRoute from "./PrivateDetailsRoute";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import TermsCondtionPrivateRoute from "./TermsCondtionPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/terms",
        element: (
          <TermsCondtionPrivateRoute>
            <TermsConditions></TermsConditions>
          </TermsCondtionPrivateRoute>
        ),
      },

      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/estateDetails/:id",
        element: (
          <PrivateDetailsRoute>
            <EstateDetails></EstateDetails>
          </PrivateDetailsRoute>
        ),
        loader: () => fetch("/estates.json"),
      },
    ],
  },
]);

export default router;
