import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuContent from "./MenuContent";




import { createBrowserRouter } from "react-router-dom";


const Menurouting = createBrowserRouter([
  {
    path: "/",
    element: <projectroute />,
    children: [

   
     
      {path:"/menu",element:<MenuContent/>}
   ],
  },
]);

export default Menurouting;



