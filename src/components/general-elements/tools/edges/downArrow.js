// Context
import { useCanvasContext } from "../../../../context/canvasContextStore";

// Tool Icons Template
import ToolIcon from "../toolIcon";

const DownArrow = () => {
  const { svgFn } = useCanvasContext();
  const addEdge = () => {
    const arrowGroup = svgFn.group();

    const arrowBody = arrowGroup
      .line(0, 50, 150, 50)
      .move(20, 20)
      .stroke({ color: "#f06", width: 3, linecap: "round" });

    arrowBody.marker("end", 5, 3, function (add) {
      add.polygon("0 0, 5 1.5, 0 3").fill("#f06");
    });

    arrowGroup.add(arrowBody);

    arrowGroup.draggable();
  };

  return (
    <ToolIcon
      title="Add Down Arrow"
      iconClass="bi-arrow-down"
      onClick={() => addEdge()}
    />
  );
};

export default DownArrow;
