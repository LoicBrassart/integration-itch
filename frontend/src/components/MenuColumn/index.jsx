import Icon from "@components/Icon";
import propTypes from "prop-types";
import SMenuColumn from "./style";

export default function MenuColumn({ buttons }) {
  return (
    <SMenuColumn>
      {buttons.map((item) => {
        return (
          <li key={item.id}>
            <Icon name={item.icon} />
            <span>{item.text}</span>
          </li>
        );
      })}
    </SMenuColumn>
  );
}
MenuColumn.propTypes = {
  buttons: propTypes.arrayOf(propTypes.shape()).isRequired,
};
