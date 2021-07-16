import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Store from "./components/Store";
import Login from "./components/Login";
import Itempage from "./components/Itempage";
import Forgotpwd from "./components/Forgotpwd";
import Changepwd from "./components/Changepwd";
import Additem from "./components/Additem";
import Updateitem from "./components/Updateitem";
import Addstore from "./components/Addstore";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = localStorage.getItem("user");
    setUser(user_data ? JSON.parse(user_data) : null);
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact component={Header} />
      <Nav user={user} setUser={setUser} />
      <Route path="/" exact component={Search} />
      <Route
        path="/retail"
        exact
        component={() => <Hall title="Retail Stores" user={user} />}
      />
      <Route
        path="/dining"
        exact
        component={() => <Hall title="Dining Halls" user={user} />}
      />
      <Route path="/store/:id" exact component={() => <Store user={user} />} />
      <Route
        path="/store/item/:id"
        exact
        component={() => <Itempage user={user} />}
      />
      <Route path="/add-item" exact component={() => <Additem user={user} />} />
      <Route
        path="/add-store"
        exact
        component={() => <Addstore user={user} />}
      />
      <Route
        path="/update-item/:id"
        exact
        component={() => <Updateitem user={user} />}
      />
      <Route
        path="/login"
        exact
        component={() => <Login user={user} setUser={setUser} />}
      />
      <Route
        path="/forgot-password"
        exact
        component={() => <Forgotpwd user={user} />}
      />
      <Route
        path="/change-password"
        exact
        component={() => <Changepwd user={user} setUser={setUser} />}
      />
    </BrowserRouter>
  );
}

export default App;
