import styled from "styled-components";
import bground from "@assets/background.jpg";

export default styled.div`
  background-color: yellowgreen;
  > article {
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: relative;
    background: rgba(200, 200, 200, 0.9);

    &:nth-of-type(2n) {
      background: url(${bground}), rgba(200, 200, 200, 0.9);
      background-size: cover;
      background-blend-mode: screen;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
