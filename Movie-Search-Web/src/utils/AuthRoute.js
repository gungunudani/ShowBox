import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function AuthRoute({ component: Component, ...rest }) {
  const isSignUp =
    localStorage.getItem("isSignUp") !== "undefined" &&
    localStorage.getItem("isSignUp");

  const isLogIn =
    localStorage.getItem("isLogIn") !== "undefined" &&
    localStorage.getItem("isLogIn");

  // return (
  //   <Routes>
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isSignUp && isLogIn ? (
  //           <React.Fragment>
  //             <Component {...props} />
  //           </React.Fragment>
  //         ) : (
  //           <Navigate to="/signup" />
  //         )
  //       }
  //     />
  //   </Routes>
  // );

  return isLogIn && isSignUp ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoute;
