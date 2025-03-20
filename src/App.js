import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopUsers from "./pages/TopUser";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import "./styles/global.css";  // Custom global CSS

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Social Media Analytics</h1>
          <p>Real-Time User Behavior Insights</p>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
