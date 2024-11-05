import {  createHashRouter } from "react-router-dom";
import Error from "./components/error/error";

import Ifsc from "./components/ifsc/ifsc";
import Blog from "./components/blog/blog";
import Quote from "./components/quotes/quotes";
import BlogDetail from "./components/blog/blog-detail";
import Pincode from "./components/pincode/pincode";

export const router = createHashRouter([
    {
        path:'/',
        element:<Ifsc />,
        errorElement:<Error/>
    },
    {
        path: "/ifsc",
        element: <Ifsc />,
        errorElement:<Error/>
    },
    {
        path: "/quotes",
        element: <Quote />,
        errorElement:<Error/>
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement:<Error/>
    },
    {
        path: "/blog/:id",
        element: <BlogDetail />,
        errorElement:<Error/>
    },  {
        path: "/pincode",
        element: <Pincode />,
        errorElement:<Error/>
    },
]);