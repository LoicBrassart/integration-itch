import { useState, createElement } from "react";
import { FaAdn, FaAnchor, FaBeer } from "react-icons/fa";
import SMultiToggle from "./style";

export default function MultiToggle() {
  const [options] = useState([FaBeer, FaAdn, FaAnchor]);
  const [currOption, setCurrOption] = useState(1);

  const hNextOption = () => {
    setCurrOption(currOption + 1);
  };

  return (
    <SMultiToggle
      onClick={hNextOption}
      data-orientation={currOption * (360 / options.length)}
    >
      {options.map((option, idx) => {
        const idxMod = idx % options.length;
        return createElement(options[idxMod], {
          key: option,
          className: `choice ${
            idxMod === currOption % options.length && "currentIcon"
          }`,
        });
      })}
    </SMultiToggle>
  );
}
