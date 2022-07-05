import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Icon from "@components/Icon";
import { SBoard, SDropZone, SPawn } from "./style";

function DropZone({ x, y }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "pawn",
    drop: () => ({ name: `${x},${y}`, x, y }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  return (
    <SDropZone
      ref={drop}
      className={isActive && "active"}
      x={Number(x)}
      y={Number(y)}
    />
  );
}

function Pawn() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "pawn",
    item: { name: "your main pawn" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        setX(dropResult.x);
        setY(dropResult.y);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <SPawn ref={drag} className={isDragging && "dragging"} x={x} y={y}>
      <Icon name="hyenaHead" fgColor="white" />
    </SPawn>
  );
}

export default function Board() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SBoard>
        {"01234567".split("").map((y) => {
          return (
            <div key={y} className="row">
              {"01234567".split("").map((x) => {
                return <DropZone key={`${x}${y}`} x={x} y={y} />;
              })}
            </div>
          );
        })}
        <Pawn />
      </SBoard>
    </DndProvider>
  );
}
