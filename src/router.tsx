import {  createHashRouter } from "react-router-dom";
import Error from "./components/error/error";

import Ifsc from "./components/ifsc/ifsc";
import Blog from "./components/blog/blog";
import Quote from "./components/quotes/quotes";
import BlogDetail from "./components/blog/blog-detail";
import Pincode from "./components/pincode/pincode";
import News from "./components/news/news";
import NewsDetail from "./components/news/news-detail";

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
    {
        path: "/news",
        element: <News />,
        errorElement:<Error/>
    },
    {
        path: "/news/:id",
        element: < NewsDetail/>
        
      },// Add a 404 route
    //   {
    //     path: "/404",
    //     element: <Error />, // Reuse your Error component
    //   },
    //   // Optional: Add a catch-all route for unmatched paths
    //   {
    //     path: "*",
    //     element: <Error />,
    //   },
]);