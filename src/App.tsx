import { createBrowserRouter } from "react-router";

import { Home } from "./pages/home";
import { Adm } from "./pages/adm";
import { Network } from "./pages/network";
import { Login } from "./pages/login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/adm',
    element: <Adm/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/network',
    element: <Network/>
  },
])

export {router}