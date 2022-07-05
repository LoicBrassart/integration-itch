import styled from "styled-components";

const SBoard = styled.div`
  width: 40vw;
  aspect-ratio: 1;
  background-color: rgba(255, 0, 0, 0.6);
  position: relative;

  .row {
    display: flex;
  }
`;

const SDropZone = styled.div`
  width: 5vw;
  aspect-ratio: 1;
  background-color: rgba(0, 255, 0, 0.6);

  ${(props) =>
    (props.x + props.y) % 2
      ? "background-color: rgba(0, 255, 0, 0.6);"
      : "background-color: rgba(0, 200, 0, 0.6);"}

  &.active {
    background-color: rgba(200, 200, 200, 0.6);
  }
`;

const SPawn = styled.div`
  width: 5vw;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: rgba(0, 0, 255, 0.6);
  position: absolute;
  top: calc(${(props) => props.y} * 5vw);
  left: calc(${(props) => props.x} * 5vw);

  &.dragging {
    opacity: 0.4;
  }
`;

export { SBoard, SDropZone, SPawn };
