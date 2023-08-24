import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import CompleteSignupPage from "./pages/CompleteSignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardLayout";
import TasksPage from "./pages/TasksPage";
import EditProfilePage from "./pages/EditProfilePage";
import ErrorPage from "./pages/404";

import { action as completeSignupAction } from "./pages/CompleteSignupPage";
import { action as loginAction } from "./pages/LoginPage";

import { loader as dashboardPageLoader } from "./pages/EditProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SignupPage /> },
      {
        path: "complete-signup",
        element: <CompleteSignupPage />,
        action: completeSignupAction,
      },
      { path: "login", element: <LoginPage />, action: loginAction },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: dashboardPageLoader,
    children: [
      { index: true, element: <TasksPage /> },
      {
        path: "edit-profile",
        element: <EditProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
