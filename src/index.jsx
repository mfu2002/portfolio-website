import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App/App";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Portfolio from "./routes/Portfolio/Portfolio";
import DetailsCard from "./components/DetailsCard/DetailsCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Resume",
        element: (
          <DetailsCard title="Resume">
            <Resume />
          </DetailsCard>
        ),
      },
      {
        path: "/Portfolio",
        element: (
          <DetailsCard title="Portfolio">
            <Portfolio />
          </DetailsCard>
        ),
      },
      {
        path: "/",
        element: (
          <DetailsCard title="About Me">
            <About />
          </DetailsCard>
        ),
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
