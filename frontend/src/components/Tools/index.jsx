import PropTypes from "prop-types";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import STools from "./style";

export default function Tools({ html, css, js, react, express, sql }) {
  return (
    <>
      <h3>Tools</h3>
      <STools>
        <li className={html ? "active html" : "html"}>
          <FaHtml5 />
        </li>
        <li className={css ? "active css" : "css"}>
          <FaCss3 />
        </li>
        <li className={js ? "active js" : "js"}>
          <FaJs />
        </li>
        <li className={react ? "active react" : "react"}>
          <FaReact />
        </li>
        <li className={express ? "active node" : "node"}>
          <FaNodeJs />
        </li>
        <li className={sql ? "active mysql" : "mysql"}>
          <FaDatabase />
        </li>
      </STools>
    </>
  );
}
Tools.propTypes = {
  html: PropTypes.bool,
  css: PropTypes.bool,
  js: PropTypes.bool,
  react: PropTypes.bool,
  express: PropTypes.bool,
  sql: PropTypes.bool,
};
Tools.defaultProps = {
  html: false,
  css: false,
  js: false,
  react: false,
  express: false,
  sql: false,
};
