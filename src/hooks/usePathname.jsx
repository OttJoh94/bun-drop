import React, { useState } from "react";

function usePathname() {
  const [path, setPath] = useState("");

  window.addEventListener("click", evaluatePath);

  function evaluatePath() {
    setPath(window.location.pathname);
  }
  return { path };
}

export default usePathname;
