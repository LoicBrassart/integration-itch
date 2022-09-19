import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  background-color: black;

  img {
    width: 33%;
    transition: 0.1s ease-in-out all;
  }

  img:not(:hover) {
    transform: scale(0.8);
    opacity: 0.6;
  }
`;
