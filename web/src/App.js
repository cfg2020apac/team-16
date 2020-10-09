import React from "react";
import { Button } from 'antd';
import "./App.less";
import { Routes } from "./Routes";

function App() {
  return (
      <div className="App">
        <Routes/>
      </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
