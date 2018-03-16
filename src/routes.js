import React from "react";
import { Route } from "react-router-dom";

import LoginComponent from "./components/Login";
import SignupStep1Component from "./components/Signup/Step1";
import SignupStep2Component from "./components/Signup/Step2";
import SignupStep3Component from "./components/Signup/Step3";
import Dashboard from "./components/Dashboard";

import Header from "./components/Header";

export default () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <Route component={LoginComponent} path="/login" />
      <Route path="/signup">
        <React.Fragment>
          <Route exact path="/signup" component={SignupStep1Component} />
          <Route path="/signup/2" component={SignupStep2Component} />
          <Route path="/signup/3" component={SignupStep3Component} />
        </React.Fragment>
      </Route>
      <Route component={Dashboard} exact path="/" />
    </div>
  </React.Fragment>
);
