import { PropTypes } from "prop-types";
import iconPaths from "@assets/mocks/iconPaths";
import SIcon from "./style";

export default function Icon({ fgColor, bgColor, name }) {
  return (
    <SIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" style={{ fill: bgColor }} />
      <g transform="translate(0,0)">
        <path d={iconPaths[name]} style={{ fill: fgColor }} />
      </g>
    </SIcon>
  );
}
Icon.propTypes = {
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconPaths)).isRequired,
};
Icon.defaultProps = {
  fgColor: "currentColor",
  bgColor: "transparent",
};
