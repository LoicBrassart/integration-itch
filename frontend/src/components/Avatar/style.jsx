import styled from "styled-components";

export default styled.div`
  background-color: rgba(255, 0, 0, 0.7);
  width: 20em;
  height: 6em;
  margin: 3em;
  position: relative;
  border-radius: 0.7em;
  display: flex;
  flex-flow: column nowrap;

  img {
    position: absolute;
    top: -1em;
    left: -1em;
    width: 4em;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 1em;
  }
`;
