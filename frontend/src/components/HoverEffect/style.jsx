import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  transition: 0.2s linear all;

  h2 {
    text-transform: uppercase;
    font-size: 4.5em;
    font-weight: bold;
  }

  .gallery {
    display: flex;
    flex-flow: row nowrap;
    align-items: space-evenly;

    li {
      padding: 0.5em;
      transition: 0.2s linear all;
      &:hover {
        transform: translateY(-1em);
      }
    }
  }
`;
