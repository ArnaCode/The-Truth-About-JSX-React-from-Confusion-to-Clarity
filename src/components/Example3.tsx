import React from "react";

export function Example3() {
  // Example 3: Passing Props

  const buttonJSX = <button className="btn-primary">Click Me</button>;

  const buttonCreateElement = React.createElement(
    "button",
    { className: "btn-primary" },
    "Click Me"
  );

  return (
    <div>
      {buttonJSX}
      {buttonCreateElement}
    </div>
  );
}
