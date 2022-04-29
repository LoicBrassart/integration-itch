import propTypes from "prop-types";
import burger from "@assets/hamburger-menu.svg";
import SButton from "./style";

export default function Button({ data: { icon, text, cback } }) {
  return (
    <SButton onClick={cback || null}>
      <img src={icon || burger} alt={text} />
      <p>{text}</p>
    </SButton>
  );
}
Button.propTypes = {
  data: propTypes.shape({
    icon: propTypes.string,
    text: propTypes.string,
    cback: propTypes.func,
  }).isRequired,
};
