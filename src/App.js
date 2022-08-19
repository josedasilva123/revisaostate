import { ToastContainer } from "react-toastify";

import PageHome from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import PageLogin from "./pages/Login";
import PageRegister from "./pages/Register";

function App() {  

  return (
    <div className="App">
      <PageHome />
      <PageLogin />
      <PageRegister />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
