import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { MessagesPage } from "./pages/MessagesPage";
import { NotificationPage } from "./pages/NotificationPage";
function App() {
  return (
    <Router>
      <div className="bg-primary text-light p-4 mb-2 d-flex justify-content-between">
        <Link to="/home">
          <h3 className="text-light">Home</h3>
        </Link>
        <Link to="/explore">
          <h3 className="text-light">Explore</h3>
        </Link>
        <Link to="/notification">
          <h3 className="text-light">Notification</h3>
        </Link>
        <Link to="/message">
          <h3 className="text-light">Messages</h3>
        </Link>
      </div>

      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/explore" component={ExplorePage} />
      <Route exact path="/notification" component={NotificationPage} />
      <Route exact path="/message" component={MessagesPage} />
    </Router>
  );
}

export default App;
