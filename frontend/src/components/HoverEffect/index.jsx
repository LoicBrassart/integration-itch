import Icon from "@components/Icon";
import { useState } from "react";
import SHoverEffect from "./style";

export default function HoverEffect() {
  const icons = [
    {
      color: "red",
      name: "hyenaHead",
    },
    {
      color: "blue",
      name: "pianist",
    },
    {
      color: "violet",
      name: "philo",
    },
    {
      color: "yellowgreen",
      name: "coinFlip",
    },
    {
      color: "coral",
      name: "hyenaHead",
    },
  ];
  const [color, setColor] = useState(null);
  const hHover = (newColor) => {
    setColor(newColor);
  };
  const hLeave = () => {
    setColor(null);
  };

  return (
    <SHoverEffect bgColor={color}>
      <h2>I&apos;m a title</h2>
      <ul className="gallery">
        {icons.map((icon) => (
          <li
            onMouseEnter={() => hHover(icon.color)}
            onMouseLeave={hLeave}
            bgcolor={icon.color}
            key={icon.color}
          >
            <Icon
              fgColor={color && color === icon.color ? color : "white"}
              bgColor={!color || color !== icon.color ? icon.color : "white"}
              name={icon.name}
            />
          </li>
        ))}
      </ul>
    </SHoverEffect>
  );
}
