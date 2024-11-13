import React from "react";

export function Example7() {
  // Example 7: Handling Events

  const handleClick = () => {
    alert("Button clicked!");
  };

  const buttonJSX = <button onClick={handleClick}>Click Me</button>;

  const buttonCreateElement = React.createElement(
    "button",
    { onClick: handleClick },
    "Click Me"
  );

  return (
    <div>
      {buttonJSX}
      {buttonCreateElement}
    </div>
  );
}
