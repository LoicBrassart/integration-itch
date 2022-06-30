import Icon from "@components/Icon";
import propTypes from "prop-types";
import SMenu3D from "./style";

export default function Menu3D({ buttons }) {
  return (
    <SMenu3D>
      {buttons.map((item, i) => {
        return (
          <li key={item.id} style={{ "--zIndex": buttons.length - i }}>
            {item.text}
            <Icon name={item.icon} />
          </li>
        );
      })}
    </SMenu3D>
  );
}
Menu3D.propTypes = {
  buttons: propTypes.arrayOf(propTypes.shape()).isRequired,
};
