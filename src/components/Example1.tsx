import React from "react";

export function Example1() {
  // Example 1: JSX Transpilation to React.createElement

  const elementJSX = <h1>Hello, World!</h1>;

  const elementCreateElement = React.createElement("h1", null, "Hello, World!");

  return (
    <div>
      {elementJSX}
      {elementCreateElement}
    </div>
  );
}
