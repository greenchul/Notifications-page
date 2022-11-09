import React from "react";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";
import { store } from "./store/index";
import { StoreProvider } from "easy-peasy";

import "./App.css";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <NavBar />
        <Notifications />
      </StoreProvider>
    </div>
  );
}

export default App;
