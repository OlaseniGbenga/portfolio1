import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";


import Error from "@/pages/errorPage";
import Protected from "@/components/layout/protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    element: <Protected />,

    children: [
      // {
      //   path: ,
      //   element: ,
      // },
    
    ],
  },
]);

export default router;
