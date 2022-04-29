import styled from "styled-components";

function template(i) {
  return `
    &:nth-child(${i + 1}) {
      transform: translate(calc(100px * ${i}), calc(100px * ${i}));
    }`;
}
function getAnimations(nbChildren) {
  let str = "";
  for (let i = 0; i < nbChildren; i += 1) {
    str += template(i);
  }
  return str;
}
export default styled.ul`
  list-style-type: none;
  border: 2px dotted yellowgreen;
  width: fit-content;
  position: relative;

  .item {
    transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
    position: absolute;
    top: 50%;
    left: 50%;

    transform: scale(0.8);
  }

  &.open .item {
    ${(props) => getAnimations(props.nbChildren)}
  }
`;
