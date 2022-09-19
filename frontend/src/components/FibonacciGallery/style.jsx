import img1 from "@assets/pictures/img1.jpg";
import img2 from "@assets/pictures/img2.jpg";
import img3 from "@assets/pictures/img3.jpg";
import img4 from "@assets/pictures/img4.jpg";
import logo from "@assets/icons/logo.svg";
import styled from "styled-components";

export default styled.div`
  width: 80vw;
  aspect-ratio: 1;

  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;

  .Img1 {
    grid-area: 1 / 1 / 5 / 3;
    background: url(${img1});
  }
  .Img2 {
    grid-area: 1 / 3 / 3 / 5;
    background: url(${img2});
  }
  .Img3 {
    grid-area: 3 / 4 / 5 / 5;
    background: url(${img3});
  }
  .Img4 {
    grid-area: 4 / 3 / 5 / 4;
    background: url(${img4});
  }
  .Img5 {
    grid-area: 3 / 3 / 3 / 3;
    background: url(${logo});
    background-size: cover;
    background-position: center center;
  }
  .Logo {
    grid-area: 3 / 3 / 4 / 4;
  }
  .Grayout {
    grid-area: 3 / 2 / 4 / 4;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5rem;
    font-family: Ubuntu, sans-serif;
    text-align: center;
  }

  .pic {
    background-size: cover;
    background-position: center center;
  }
`;
