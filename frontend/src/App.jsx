import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CategoriesBar from "./components/CategoriesBar";
import Filler from "./components/Filler";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <Router>
      <div className="app w-full min-h-screen relative bg-slate-300">
        <NavBar />
        <Filler />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/blogs/:id">
              <SingleBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div className="w-full min-h-screen bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-cover bg-repeat-y bg-slate-300"> */
}
