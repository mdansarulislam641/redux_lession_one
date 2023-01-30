import { createBrowserRouter } from "react-router-dom";
import Card from "../components/Card";
import Home from "../components/Home";
import TopRated from "../components/TopRated";
import Wishlist from "../components/Wishlist";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";

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
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard',
                element:<ProductList></ProductList>
            }
        ]
    }
])