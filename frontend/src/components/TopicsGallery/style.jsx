import styled from "styled-components";

import img1 from "@assets/pictures/img1.jpg";
import img2 from "@assets/pictures/img2.jpg";
import img3 from "@assets/pictures/img3.jpg";
import img4 from "@assets/pictures/img4.jpg";

export default styled.ul`
  li {
    width: 17em;
    aspect-ratio: 1;
    /* overflow: hidden; */
    position: relative;
    z-index: 0;

    div {
      width: 100%;
      height: 100%;
      transition: 0.4s all ease-in-out;
      position: absolute;
      border: 1px solid black;
      box-sizing: border-box;
      background-size: cover;
      background-position: center center;

      &:nth-of-type(1) {
        background-image: url(${img1});
        top: 0;
        left: 0;
        z-index: 1;
      }
      &:nth-of-type(2) {
        top: 0;
        right: 0;
        background-image: url(${img2});
      }
      &:nth-of-type(3) {
        bottom: 0;
        left: 0;
        background-image: url(${img3});
      }
      &:nth-of-type(4) {
        bottom: 0;
        right: 0;
        background-image: url(${img4});
      }
    }

    &:hover div {
      width: 50%;
      height: 50%;
    }

    h3 {
      color: white;
      font-family: "Palanquin Dark", sans-serif;
      font-size: 1.5em;
      position: absolute;
      bottom: 1em;
      left: 1em;
      z-index: 5;
    }
  }
`;
