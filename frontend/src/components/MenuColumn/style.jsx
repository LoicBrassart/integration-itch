import styled from "styled-components";

export default styled.ul`
  background-color: white;
  width: 5em;
  border-radius: 5em;

  li {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: 15% 10%;
    position: relative;
    z-index: 0;

    :hover span {
      opacity: 1;
    }
  }

  img {
    border-radius: 50%;
    width: 90%;
  }

  span {
    opacity: 0;
    position: absolute;
    left: 150%;
    background-color: white;
    padding: 0.5em;
    border-radius: 0.4em;
    transition: 0.5s all;

    &::before {
      content: "";
      position: absolute;
      width: 0.8em;
      height: 0.8em;
      background-color: white;
      left: -0.4em;
      top: calc(50% - 0.4em);
      transform: rotate(45deg);
      z-index: -1;
    }
  }
`;
