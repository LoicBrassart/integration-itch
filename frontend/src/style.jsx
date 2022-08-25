import styled from "styled-components";
import bground from "@assets/background.jpg";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");

  > article {
    height: 90vh;
    font-family: "Roboto", sans-serif;

    &:nth-of-type(2n + 1) {
      background: #21212a;
      color: white;
      padding: 3em;

      h2 {
        font-family: "Roboto Mono", monospace;
        color: #fea04f;
        font-size: 2em;
        margin-top: 2em;
        margin-bottom: 1.5em;
      }

      h3 {
        font-family: "Roboto Mono", monospace;
        color: #fea04f;
        font-size: 1.5em;
        margin-top: 1.5em;
        margin-bottom: 1em;
      }

      li {
        margin-bottom: 0.5em;
      }

      section {
        display: flex;

        main {
          flex-grow: 1.5;
        }

        aside {
          padding-left: 0.5em;
          background-color: #353740;
          flex-grow: 1;
        }
      }
    }

    &:nth-of-type(2n) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(${bground}), rgba(200, 200, 200, 0.9);
      background-size: cover;
      background-blend-mode: screen;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
