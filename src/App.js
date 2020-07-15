import React from "react";
import Todo from "./Todo";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./Redux/TodoReducer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <div className="BGCredit">
          Photo by eberhard grossgasteiger from Pexels
        </div>
      </div>
    </Provider>
  );
}

export default App;
