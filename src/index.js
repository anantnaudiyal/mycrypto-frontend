import React from "react";
import ReactDOM from "react-dom/client";
import "./index1.css";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Top10 from "./pages/Top10";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import Footer from "./components/Footer";
import CoinByID from "./pages/CoinByID";
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Preloader from "./components/Preloader"
import Loadingui from "./components/Loadingui";
import NotFound from "./components/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";

export const Data = createContext();

const Applayout = () => {
  return (
    <>
    <Preloader />

    <Provider store={appStore}>
      <Data.Provider value={"Anmol"}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen ">

        <Navbar />
        <Outlet />
        <Footer />
      </div>
      </Data.Provider>
    </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/top10', element: <Top10 />},
      {path: '/trending', element: <Trending />},
      {path: '/watchlist', element: <Watchlist />},
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      {path: '*', element: <NotFound />},
      
    ],
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

