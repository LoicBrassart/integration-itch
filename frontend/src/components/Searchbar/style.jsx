import styled from "styled-components";

export default styled.div`
  position: relative;

  .results {
    position: absolute;
    width: 150%;
    background-color: white;
    display: none;

    &.open {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    & > li {
      width: 30%;
      margin: 1.5%;
    }

    h2 {
      border-bottom: 2px solid rgb(25, 25, 150);
      color: rgb(25, 25, 150);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  }
`;
