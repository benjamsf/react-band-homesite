import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Mock here */ /*
import { PrivateRoute } from "./PrivateMockRoute"; 
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrivateRoute } from "./hooks/auth/PrivateRoute"; 

const router = createBrowserRouter([

    {
      path: "/error",
      element: <ErrorView />,
    },
    {
      path: "*",
      element: <NotFoundView />,
    },
  ]);

  export default function Router() {
    return <RouterProvider router={router} />;
  }
  