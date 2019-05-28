import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import LoginPage from "../containers/Login"
import Footer from "../components/Footer"
import Navbar from "../containers/Navbar"
import HistoryPage from "../containers/HistoryPage";
import NewsPage from "../containers/NewsPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/NewsPage" component={NewsPage} />
            <Route exact path="/HistoryPage" component={HistoryPage} />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}
export default App;