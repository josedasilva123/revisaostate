import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotesProvider } from "./contexts/NotesContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NotesProvider>
            <GlobalStyle />
            <App />
        </NotesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);