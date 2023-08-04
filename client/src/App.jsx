import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <div>
      <Navbar/>
      <Home/>
      <Footer/>
      </div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
]);

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
//Just a testing comment