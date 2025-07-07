import { createBrowserRouter } from "react-router";

import { Home } from "./pages/home";
import { Adm } from "./pages/adm";
import { Network } from "./pages/network";
import { Login } from "./pages/login";
import { Private } from "./routes/private";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/adm',
    element: <Private><Adm/></Private>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/adm/social',
    element: <Private><Network/></Private>
  },
])

export {router}