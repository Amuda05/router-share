import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Purpose from "./pages/Purpose";
import Career from "./pages/Career";
import Learn from "./pages/Learn";
import United from "./pages/United";
import PopUp from "./pages/PopUp";

function App() {
  const  [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "community",
      element: <Community/>,
    },
    {
      path: "purpose",
      element: <Purpose/>,
    },
    {
      path: "career",
      element: <Career/>,
    },
    {
      path: "learn",
      element: <Learn/>,
    },
    {
      path: "united",
      element: <United/>,
    },

  ]);

  return (
    <>
    <RouterProvider router={router} />;
    <div>
     <span onClick={togglePopup} className="harm">
      <img src="/src/media/harmburger.svg" alt="" />
     </span>
     {isOpen && <PopUp handleClose={togglePopup}/>}
    </div>
    </>
  )
}
export default App;


