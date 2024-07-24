import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
/* Mock here */ /*
import { PrivateRoute } from "./PrivateMockRoute";
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrivateRoute } from "./hooks/auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
