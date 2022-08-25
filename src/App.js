import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from "./routes";


function App() { 
  return (
    <div className="App">
        <AppRoutes />
        <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
