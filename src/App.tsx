import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from "./routes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";

function App() { 
  return (
    <div className="App">
        <AppRoutes />
        <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
