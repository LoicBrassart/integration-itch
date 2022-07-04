import styled from "styled-components";

const SBoard = styled.div`
  width: 40vw;
  aspect-ratio: 1;
  background-color: rgba(255, 0, 0, 0.6);
`;

const SDropZone = styled.div`
  width: 5em;
  aspect-ratio: 1;
  background-color: rgba(0, 255, 0, 0.6);

  &.active {
    background-color: rgba(200, 200, 200, 0.6);
  }
`;

const SPawn = styled.div`
  width: 5em;
  aspect-ratio: 1;
  background-color: rgba(0, 0, 255, 0.6);

  &.dragging {
    opacity: 0.4;
  }
`;

export { SBoard, SDropZone, SPawn };
