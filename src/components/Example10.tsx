import React, { useState } from "react";

export function Example10() {
  // Example 10: Controlled Component (Form Input)

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const inputJSX = <input type="text" />;

  const inputJSX = (
    <input type="text" value={inputValue} onChange={handleChange} />
  );

  const inputCreateElement = React.createElement("input", {
    type: "text",
    value: inputValue,
    onChange: handleChange,
  });

  return (
    <div>
      {inputJSX}
      {inputCreateElement}
      <p>Current Value: {inputValue}</p>
    </div>
  );
}
