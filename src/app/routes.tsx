import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
