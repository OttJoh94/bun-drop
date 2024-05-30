import React, { useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState();
  window.addEventListener("resize", evaluateSize);

  function evaluateSize() {
    const currentSize = window.innerWidth;
    setSize(currentSize);
  }

  return { size };
}

export default useWindowSize;
