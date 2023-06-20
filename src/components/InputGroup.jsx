import { useState } from "react";

export function InputGroup({
   name,
   title,
   userInformation,
   handleUserInformation
}) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <input
        type="number"
        id={name}
        name={name}
        onChange={({target:{value}}) => {
         setUserInput(value);
         handleUserInformation(value);
      }}
        value={userInput}
      />
    </div>
  );
}
