import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InternshipList from "./pages/InternshipList";
import NotFound from "./pages/404";
import DetailInternship from "./pages/DetailInternship";
import ProfileMahasiswa from "./pages/ProfileMahasiswa";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/internship" excact component={InternshipList} />
          <Route path="/detail" excact component={DetailInternship} />
          <Route path="/profile" excact component={ProfileMahasiswa} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
