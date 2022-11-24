import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Appoinment from "../Pages/Appoinment/Appoinment/Appoinment"
import Dashbord from "../Pages/Dashbord/Dashbord"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/Login/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appoinment></Appoinment>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
    }
])