import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Mock here */ /*
import { PrivateRoute } from "./PrivateMockRoute"; 

 <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="/what" element={
                <PrivateRoute>
                    <What />
                </PrivateRoute>
            } />
            <Route path="/how" element={
                <PrivateRoute>
                    <How />
                </PrivateRoute>
            } />
            <Route path="/recruitment" element={
                <PrivateRoute>
                    <Recruitment />
                </PrivateRoute>
            } />
            
        </Routes>
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrivateRoute } from "./hooks/auth/PrivateRoute"; 

const router = createBrowserRouter([

export default function Router() {
    return <RouterProvider router={router} />;
    {
        path: "/login/createmtls",
        element: (
          <ProtectedRoute requireAuthType="jwt" requireValidUser={true}>
            <MtlsCreateView />
          </ProtectedRoute>
        ),
      },
      {
        path: "/error",
        element: <ErrorView />,
      },
      {
        path: "*",
        element: <NotFoundView />,
      },
    ]);
  }
  