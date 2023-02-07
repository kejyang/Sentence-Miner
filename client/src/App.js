import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import SentenceList from "./components/sentenceList";
import Edit2 from "./components/edit2";
import Create from "./components/create";
import Post from "./components/post";
import SentencePage from "./components/sentencePage";
import Search from "./components/search";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<SentenceList />} />
        <Route path="/edit/:id" element={<Edit2 />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post" element={<Post />} />
        <Route path="/sentencePage/:id" element={<SentencePage />} />
        <Route path="/search/:query" element = {<Search />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
