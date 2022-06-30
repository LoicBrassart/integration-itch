import styled from "styled-components";

const mainSkew = "15deg";
const subSkew = "45deg";
const depth = "2em";
const stepWhenHovered = "-15px";
const color = "violet";

export default styled.ul`
  transform: skew(0, -${mainSkew});

  li {
    width: 10em;
    height: 3em;
    transition: 0.5s;
    background-color: ${color};
    position: relative;
    z-index: var(--zIndex);
    display: flex;
    justify-content: space-between;

    &:hover {
      transform: translateX(${stepWhenHovered});
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
    }

    &::before {
      width: ${depth};
      height: 100%;
      background-color: ${color};
      filter: brightness(80%);
      top: calc(-${depth} / 2);
      left: -${depth};
      transform: skewY(${subSkew});
    }

    &::after {
      width: 100%;
      height: ${depth};
      background-color: ${color};
      filter: brightness(70%);
      top: -${depth};
      left: calc(-${depth} / 2);
      transform: skewX(${subSkew});
    }
  }
`;
