import React from "react";

export function Example4() {
  // Example 4: Functional Component with JSX

  const GreetingJSX = () => <h1>Hello from a Functional Component!</h1>;

  const GreetingCreateElement = () => {
    return React.createElement(
      "h1",
      null,
      "Hello from a Functional Component!"
    );
  };

  return (
    <div>
      <GreetingJSX />
      {React.createElement(GreetingCreateElement)}
    </div>
  );
}
