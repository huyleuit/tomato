import "./index.css";
import React from "react";
import Root from "./routes/Root.jsx";
import ReactDOM from "react-dom/client";
import Homepage from "./routes/Homepage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import AboutUs from "./routes/AboutUs";
import Contract from "./routes/Contract";
import Document from "./routes/Document";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import DocumentPage from "./components/document/DocumentPage";
import Timeline from "./routes/Timeline";
import FirstMeeting from "./components/document/FirstMeeting";
import SecondMeeting from "./components/document/SecondMeeting";
import ThirdMeeting from "./components/document/ThirdMeeting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contract",
        element: <Contract />,
      },
      {
        path: "document",
        element: <Document />,
        children: [
          {
            path: "",
            element: <DocumentPage />,
          },
          {
            path: "first-meeting",
            element: <FirstMeeting />,
          },
          {
            path: "second-meeting",
            element: <SecondMeeting />,
          },
          {
            path: "third-meeting",
            element: <ThirdMeeting />,
          },
        ],
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
