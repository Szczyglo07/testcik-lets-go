import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { EventDetail } from './pages/EventDetail';
import { Checkout } from './pages/Checkout';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'event/:id', Component: EventDetail },
      { path: 'checkout', Component: Checkout },
      { path: "login", Component: Login },
      { path: "register", Component: Register },

    ],
  },
]);
