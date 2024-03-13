import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Profile from "./components/ProfileClassComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Error from "./components/Error";

const AppLayout = function () {
  return (
    <Provider store={store}>
      <Header/>
      <Outlet />
      <Footer />
    </Provider>
  );
};


const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path :"/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contactus",
        element: <Contact />
      },
      {
        path : "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement : <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
