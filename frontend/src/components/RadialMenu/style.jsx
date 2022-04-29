import styled from "styled-components";

function template(nbChildren, i) {
  const start = 0;
  const end = Math.PI / 2;
  const arc = end - start;
  const angle = (arc / (nbChildren - 1)) * i;
  const x = Math.cos(angle);
  const y = Math.tan(angle) * x;

  return `
    &:nth-child(${i + 1}) {
      transform: translate(calc(7.5rem * ${x}), calc(7.5rem * ${y}));
    }`;
}
function getPositions(nbChildren) {
  let str = "";
  for (let i = 0; i < nbChildren; i += 1) {
    str += template(nbChildren, i);
  }
  return str;
}
export default styled.ul`
  width: 5rem;
  aspect-ratio: 1/1;
  list-style-type: none;
  position: absolute;

  .item {
    transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(0.5);
  }

  &.open .item {
    ${(props) => getPositions(props.nbChildren)}
  }
`;
