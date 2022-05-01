import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  position: absolute;
  right: 0;

  > button {
    width: 4em;
    margin: 1em;
    height: 4em;
    border-radius: 50%;
    position: absolute;
    right: 0;
  }

  > aside {
    background-color: rgba(100, 100, 150, 1);
    width: 30vw;
    height: 100%;
    position: absolute;
    right: -30vw;
    transition: 0.3s linear all;
  }
  &.open > aside {
    right: 0;
  }
`;
