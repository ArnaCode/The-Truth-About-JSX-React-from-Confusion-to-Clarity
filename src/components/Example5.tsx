import React from "react";

export function Example5() {
  // Example 5: Conditional Rendering

  const isLoggedIn: boolean = false;

  const greetingJSX = (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}</div>
  );

  const greetingCreateElement = React.createElement(
    "div",
    null,
    isLoggedIn
      ? React.createElement("h1", null, "Welcome Back!")
      : React.createElement("h1", null, "Please Log In")
  );
  return (
    <div>
      {greetingJSX}
      {greetingCreateElement}
    </div>
  );
}
