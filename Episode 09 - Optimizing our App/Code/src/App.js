import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
// import Grocery from "./components/Grocery";
////////////// FOOTER ///////////////

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))


const App = () => {
  return (
    <div className="app">
      <Header />
<Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <Suspense fallback ={<h1>Loading...........</h1>}><About /></Suspense>
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "grocery",
        element: <Suspense fallback ={<h1>Loading...........</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />
      },
    ],
    errorElement: <Error />
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


