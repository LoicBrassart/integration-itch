import styled from "styled-components";

export default styled.button`
  width: 10rem;
  aspect-ratio: 1;
  transform: rotate(${(props) => props["data-orientation"]}deg);
  position: relative;
  border-radius: 50%;
  border: 0;
  background: radial-gradient(
    circle at 10% 10%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
  transition: 0.4s ease-in-out all;

  .choice {
    opacity: 0;
    width: 30%;
    height: 30%;
    transform: rotate(-${(props) => props["data-orientation"]}deg);
    position: absolute;
    top: 0;
    left: 0;
    color: grey;
    transition: 0.4s ease-in-out all;
  }
  .currentIcon {
    opacity: 1;
  }
`;
