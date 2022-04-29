import propTypes from "prop-types";
import Button from "@components/Button";
import { useState } from "react";
import SMenu from "./style";

export default function RadialMenu({ buttons }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <SMenu className={open ? "open" : ""} nbChildren={buttons.length}>
      {buttons.map((butt, idx) => (
        <li key={butt.id} className="item">
          <Button data={butt} order={idx} />
        </li>
      ))}
      <Button
        data={{
          cback: toggle,
        }}
      />
    </SMenu>
  );
}
RadialMenu.propTypes = {
  buttons: propTypes.arrayOf(propTypes.shape()).isRequired,
};
