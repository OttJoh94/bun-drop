import React, { useEffect, useState } from "react";

function useInput(minLength) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (!minLength) {
      return;
    }
    if (inputValue.length <= minLength && inputValue.length !== 0) {
      setErrorMessage("Input too short");
    } else {
      setErrorMessage(null);
    }
  }, [inputValue]);

  return { inputValue, handleInput, errorMessage, setInputValue };
}

export default useInput;
