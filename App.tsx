import React from "react";

import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";
import Profile from "./src/screens/ProfileScreen";

import { Scene, Router, Stack } from "react-native-router-flux";

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" initial hideNavBar={true} />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="home" component={Profile} />
      </Stack>
    </Router>
  );
}
