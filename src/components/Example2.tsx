import React from "react";

export function Example2() {
  // Example 2: Nesting Elements

  const nestedJSX = (
    <div>
      <h1>Welcome</h1>
      <p>This is a nested element example.</p>
    </div>
  );

  const nestedCreateElement = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Welcome"),
    React.createElement("p", null, "This is a nested element example.")
  );

  return (
    <div>
      {nestedJSX}
      {nestedCreateElement}
    </div>
  );
}
