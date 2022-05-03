import { useState } from "react";

/**
 * @param {boolean} newState default is FALSE, accepts new boolean
 */

export default function useToggle(newState: null | boolean = null) {
  const [toggle, setToggle] = useState(newState === null ? false : newState);

  const setToggleStatus = (bool?: boolean) => {
    if (newState) {
      setToggle(newState);
      return;
    }
    if (bool) {
      setToggle(bool);
      return;
    }
    setToggle((prev) => !prev);
  };

  return { toggle, setToggleStatus };
}

export { useToggle };
