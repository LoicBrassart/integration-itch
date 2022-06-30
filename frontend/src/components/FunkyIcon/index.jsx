import Icon from "@components/Icon";
import useInterval from "@services/useInterval";
import { useState } from "react";
import SFunkyIcon from "./style";

export default function FunkyIcon() {
  const [fg, setFg] = useState("black");
  const [bg, setBg] = useState("white");

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b})`;
  };

  useInterval(() => {
    setBg(getRandomColor());
  }, 1700);

  useInterval(() => {
    setFg(getRandomColor());
  }, 800);

  return (
    <SFunkyIcon>
      <Icon name="pianist" fgColor={fg} bgColor={bg} />
    </SFunkyIcon>
  );
}
