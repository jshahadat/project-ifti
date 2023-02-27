import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authintication/Login/Login";
import Register from "../../Authintication/Register/Register";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Mirpur from "../../pages/Mirpur/Mirpur";
import Carpenter from "../../pages/Mirpur/Whatareyoulookingfor/Carpenter/Carpenter";
import Electrician from "../../pages/Mirpur/Whatareyoulookingfor/Electrician/Electrician";
import Plumber from "../../pages/Mirpur/Whatareyoulookingfor/Plumber/Plumber";
import Television from "../../pages/Mirpur/Whatareyoulookingfor/Television/Television";

export const routes = createBrowserRouter([
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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/mirpur',
                element: <Mirpur></Mirpur>
            }
            ,
            {
                path: '/electrician',
                element: <Electrician></Electrician>
            }
            ,
            {
                path: '/plumber',
                element: <Plumber></Plumber>
            }
            ,
            {
                path: '/carpenter',
                element: <Carpenter></Carpenter>
            }
            ,
            {
                path: '/television',
                element: <Television></Television>
            }
        ]
    }
])