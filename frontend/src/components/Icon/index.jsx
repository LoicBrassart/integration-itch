import { PropTypes } from "prop-types";
import SIcon from "./style";

export default function Icon({ name }) {
  return <SIcon src={`/src/assets/icons/${name}.svg`} />;
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
