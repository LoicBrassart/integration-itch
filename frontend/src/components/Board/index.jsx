import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Icon from "@components/Icon";
import { SBoard, SDropZone, SPawn } from "./style";

function DropZone() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "pawn",
    drop: () => ({ name: "the drop zone" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  return <SDropZone ref={drop} className={isActive && "active"} />;
}

function Pawn() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "pawn",
    item: { name: "your main pawn" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <SPawn ref={drag} className={isDragging && "dragging"}>
      <Icon name="hyenaHead" fgColor="white" />
    </SPawn>
  );
}

export default function Board() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SBoard>
        <Pawn />
        <DropZone />
      </SBoard>
    </DndProvider>
  );
}
