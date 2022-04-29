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

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
