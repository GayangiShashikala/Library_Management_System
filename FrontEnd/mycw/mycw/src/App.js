import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableComponent from "./Components/TableComponent";
import HeaderComponent from "./Components/HeaderComponent";
import CreateEditComponent from "./Components/CreateEditComponent";
import ViewComponent from "./Components/ViewComponent";



function App() {
  return (
    <div>
      <Router>
        <div >
        <HeaderComponent />
        </div>
       
        <div className="container">
          <Switch>
                          <Route path = "/" exact component = {TableComponent}></Route>
                          <Route path = "/books" component = {TableComponent}></Route>
                          <Route path = "/add-book/:id" component = {CreateEditComponent}></Route>
                          <Route path = "/view-book/:id" component = {ViewComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
