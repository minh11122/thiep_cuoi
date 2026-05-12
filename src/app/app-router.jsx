import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";


import {
  CoverPage,
  HomePage,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        children: [
          { path: "", element: <CoverPage /> },
          { path: "invitation", element: <HomePage /> },
        ],
      },

    ],
  },
]);
