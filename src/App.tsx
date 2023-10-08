import React from "react";
import "./App.scss";
import { createBrowserRouter } from "react-router-dom";
import layout from "./layout/layout";
import { RouterProvider } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Artist from "./artist/artist";
import Contact from "./contact/contact";
import NotFound from "./notFound/notFound";
declare global {
  interface NodeRequire {
      context: (
          directory: string,
          useSubdirectories: boolean,
          regExp?: RegExp
      ) => any;
  }
}

const router = createBrowserRouter([
  {
    path: "",
    Component: layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {path:"artist", Component:Artist},
      {path:"contact", Component:Contact},
      {path:"*",Component:NotFound}
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
