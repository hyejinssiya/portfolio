import { HashRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
    <HashRouter basename={process.env.PUBLIC_URL}> 
      <Wrap>
        <Cursor />
        <Sidebar />
        <Inner>
        <AnimatePresence>
          <Switch>
            <Route
              path="/project01"
              component={Project01}
            />
            <Route
                path="/project02"
                component={Project02} 
              />
            <Route
                  path="/profile"
                  component={Profile}
              />
            <Route
                path="/"
                component={Home}
                  exact />
            </Switch>
          </AnimatePresence>
        </Inner>
      </Wrap>
    </HashRouter>
  );
}

export default App;
