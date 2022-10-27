import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from "./component/Sidebar";
import Wrap from "./component/Wrap";
import Inner from "./component/Inner";
import Home from "./pages/Home";
import Project01 from "./pages/Project01";
import Project02 from "./pages/Project02";
import Profile from "./pages/Profile";
import Cursor from "./component/Cursor";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Wrap>
        <Cursor />
        <Sidebar />
        <Inner>
        <Routes>
          <Route
            path="/project01"
            element={<Project01 />}
          />
          <Route
              path="/project02"
              element={<Project02 />} 
            />
          <Route
              path="/profile"
              element={<Profile />}
             />
          <Route
              path="/"
              element={<Home />}
              exact />
          </Routes>
        </Inner>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
