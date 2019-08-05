import Home from "./comp/Home";
import Shop from "./comp/Shop";
import About from "./comp/About";
import Blog from "./comp/Blog";
import Contact from "./comp/Contact"
import NotFound from "./comp/NotFound"

export default [
     {
         path : "/",
         component : Home,
         exact : true,
         title : "Welcome to Home",
         subtitle : ""

     },
     {
        path : "/Shop",
        component : Shop,
        title : "Products",
        subtitle : "Collection Products" 

    },
    {
        path : "/About",
        component : About,
        title : "About",
        subtitle : "About Us"  

    },
    {
        path : "/Blog",
        component : Blog,
        title : "Blog",
        subtitle : "Latest Blog" 

    },
    {
        path : "/Contact",
        component : Contact,
        title : "Contact",
        subtitle : "Contact Us"

    } 
    ,
    {
        
        component : NotFound,
        title : "Not Found",
        subtitle : "Page Not Found"

    } 

]