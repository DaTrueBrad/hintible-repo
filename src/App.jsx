import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Video from "./components/Video";
import Calendar from "./components/Calendar";
import Calendly from "./components/Calendly";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Journey from "./components/Journey";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/journey/:id' element={<Journey />} />
    </Routes>
    </div>
  );
}

export default App;
