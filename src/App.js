import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";




const AppLayout= ()=>{
    return(
        <>
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
        </>

    )
}

const Approuter = createBrowserRouter([
    { path:"/",
      element:<AppLayout/>,
      errorElement : <Error/>,
      children:[
        { path:"/",
        element:<Body/>
      },
        { path:"/About",
        element:<About/>
      },
      { path:"/Contact",
      element:<Contact/>
    },
    { path:"/Restaurant/:id",
    element:<RestaurantMenu/>
  }

      ]
    },
   
])
//const heading2 = React.createElement('h2',{id:'titles',key:"2"},'Heading 2');
//const container = React.createElement('div',{id:'container',},[heading,heading2 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter}/>);