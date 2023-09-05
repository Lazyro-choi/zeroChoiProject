import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import News from "./pages/News";
import Message from "./pages/Message";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/news" element={<News />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
