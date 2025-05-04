// src/App.jsx
import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./styles/global.css";

const router = createBrowserRouter(routes);

function App() {
  useEffect(() => {
    console.log('Yandex Key:', process.env.REACT_APP_YANDEX_API_KEY);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;