import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { EventDetail } from './pages/EventDetail';
import { Checkout } from './pages/Checkout';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Profile } from "./pages/Profile";
import { MyEvents } from "./pages/MyEvents";


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
      { path: "profile", Component: Profile },
{ path: "my-events", Component: MyEvents },

    ],
  },
]);
