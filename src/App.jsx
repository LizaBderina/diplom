// src/App.jsx
import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./styles/global.css";
import './styles/variables.css'; 

const router = createBrowserRouter(routes);

function App() {
  useEffect(() => {
    console.log('TOKEN:', process.env.REACT_APP_MAPBOX_TOKEN);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;