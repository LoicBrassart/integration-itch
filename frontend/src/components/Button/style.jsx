import styled from "styled-components";

export default styled.button`
  width: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;

  > * {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    opacity: 0;
    background-color: rgba(200, 0, 0, 0.5);
    color: white;
    font-weight: bold;
  }

  &:hover > p {
    opacity: 1;
  }
`;
