import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import Homepage from "./routes/homePage/homePage.jsx";
import Listpage from "./routes/listPage/listpage.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
