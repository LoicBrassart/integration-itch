import propTypes from "prop-types";
import Icon from "@components/Icon";
import SButton from "./style";

export default function Button({ data: { icon, text, cback } }) {
  return (
    <SButton onClick={cback || null}>
      <Icon name={icon} />
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
