import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Store from "./components/Store";
import Login from "./components/Login";
import Itempage from "./components/Itempage";
import Forgotpwd from "./components/Forgotpwd";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Header} />
      <Nav />
      <Route path="/" exact component={Search} />
      <Route
        path="/retail"
        exact
        component={() => <Hall title="Retail Halls" />}
      />
      <Route
        path="/dining"
        exact
        component={() => <Hall title="Dining Halls" />}
      />
      <Route path="/store/:id" exact component={Store} />
      <Route path="/store/item/:id" exact component={Itempage} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgot-password" exact component={Forgotpwd} />
    </BrowserRouter>
  );
}

export default App;
