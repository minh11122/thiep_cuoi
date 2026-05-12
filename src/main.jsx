import { createRoot } from "react-dom/client"
import "./index.css"
import { router } from "@/app/app-router"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </>
)