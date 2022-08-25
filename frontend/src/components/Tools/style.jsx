import styled from "styled-components";

export default styled.ul`
  display: flex;

  li {
    color: rgb(255, 255, 255);
    font-size: 2em;
    opacity: 0.4;
    width: 50px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      opacity: 1;

      &.html {
        background-color: rgb(255, 100, 0);
      }
      &.css {
        background-color: rgb(0, 0, 200);
      }
      &.js {
        background-color: rgb(255, 255, 0);
      }
      &.react {
        background-color: rgb(0, 150, 255);
      }
      &.node {
        background-color: rgb(50, 255, 10);
      }
      &.mysql {
        background-color: rgb(200, 00, 200);
      }
    }
  }
`;
