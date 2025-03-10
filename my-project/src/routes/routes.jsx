import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";
import Login from "../component/Login";
import SignUp from "../component/SignUp";



   const routes= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signUp',
                element:<SignUp />
            }
        ]
    }
   ])


export default routes;