import { createBrowserRouter } from "react-router-dom";
import Card from "../components/Card";
import Home from "../components/Home";
import TopRated from "../components/TopRated";
import Wishlist from "../components/Wishlist";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/top-rated',
                element:<TopRated></TopRated>
            },
            {
                path:'/card',
                element:<Card></Card>
            },
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>
            }
        ]
    }
])