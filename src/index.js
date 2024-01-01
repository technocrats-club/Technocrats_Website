import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Team from './Pages/Team/Team';

import Resource from './Pages/Resource/Resource';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Aboutpage from './Pages/About/Aboutpage';
import Course from './Pages/Courses/Course';
import Videos from './Pages/Videos/Videos';
import Player from './Pages/player/Player';

const appRouter  = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // error
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<Aboutpage/>
      },
      {
        path:"/team",
        element:<Team/>
      },
      {
        path:"/contact",
        element:<contact/>
      },
      {
        path:"/resource",
        element:<Resource/>
      },{
        path:"/course",
        element:<Course/>
      },{
        path:"/videos",
        element:<Videos/>
      },
      {
        path:"/video",
        element:<Player/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
