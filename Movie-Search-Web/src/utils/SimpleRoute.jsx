import React from "react";
import { Route } from "react-router-dom";

function SimpleRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  );
}

export default SimpleRoute;
