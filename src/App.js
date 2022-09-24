import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      App
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country="in"
                pageSize={18}
                category="general"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                country="in"
                pageSize={18}
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                country="in"
                pageSize={18}
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general1"
                country="in"
                pageSize={18}
                category="general"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                country="in"
                pageSize={18}
                category="health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                country="in"
                pageSize={18}
                category="science"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                country="in"
                pageSize={18}
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                country="in"
                pageSize={18}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
