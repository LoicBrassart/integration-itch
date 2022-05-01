import { useState, useEffect } from "react";
import propTypes from "prop-types";
import SExplanations from "./style";

export default function Explanations({ children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => {
      setOpen(false);
    };

    document.addEventListener("scroll", close);
    return () => {
      document.removeEventListener("scroll", close);
    };
  }, []);
  const hToggle = () => {
    setOpen(!open);
  };

  return (
    <SExplanations className={open && `open`}>
      <aside>{children}</aside>
      <button type="button" onClick={hToggle}>
        {open ? "X" : "?"}
      </button>
    </SExplanations>
  );
}
Explanations.propTypes = {
  children: propTypes.shape().isRequired,
};
