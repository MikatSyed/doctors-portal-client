import { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Appoinment from "./Component/Appoinment/Appoinment/Appoinment";
import Home from "./Component/Home/Home/Home";
import Login from './Component/Login/Login/Login';
import Profile from './Component/Login/Profile/Profile';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Patient from './Component/Dashboard/Patient/Patient';
import Admin from './Component/Dashboard/Admin/Admin';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/appoinment" component={Appoinment} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/patient" component={Patient} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
