import PropTypes from "prop-types";
import STools from "./style";

export default function Tools({ html, css, js, react, express, sql }) {
  return (
    <>
      <h3>Tools</h3>
      <STools>
        {html && <li>HTML</li>}
        {css && <li>CSS</li>}
        {js && <li>JS Vanilla</li>}
        {react && <li>React</li>}
        {express && <li>Express</li>}
        {sql && <li>MySQL</li>}
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
