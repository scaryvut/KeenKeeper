
import "./index.css";
import RootLayout from "./Component/RootLayout.jsx";
import HomePage from "./Component/HomePage.jsx";
import Details from "./Component/Details.jsx";
import Timeline from "./Component/Timeline.jsx";
import NotFound from "./Component/NotFound.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Yet from "./Yet.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
      },
      {
        path: "timelineFriends",
        element: <Timeline />,
      },
      {
        path:"stats",
        element: <Yet></Yet>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <RouterProvider router={router} />
  
  </StrictMode>
);