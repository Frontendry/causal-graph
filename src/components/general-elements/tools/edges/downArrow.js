// React ID Generator
import nextId from "react-id-generator";

// Context
import { useCanvasContext } from "../../../../context/canvasContextStore";

// Tool Icons Template
import ToolIcon from "../toolIcon";

const DownArrow = () => {
  const { setSvgFn } = useCanvasContext();

  const addEdge = () => {
    // Initialize Unique IDs
    const textSvgId = nextId();
    setSvgFn((current) => {
      const arrowGroup = current.group();

      // Add SVG Group with unique ID and some attributes to main SVG 'Canvas'
      arrowGroup.attr({
        id: `svgArrow${textSvgId}`,
        class: "causal-graph-component",
      });

      const arrowBody = arrowGroup
        .line(0, 50, 150, 50)
        .stroke({ color: "#f06", width: 3, linecap: "round" })
        .attr({
          class: "arrow-body-svg",
        });

      arrowBody.marker("end", 5, 3, function (add) {
        add.polygon("0 0, 5 1.5, 0 3").fill("#f06");
      });

      const groupList = current.node.instance.find(`#svgArrow${textSvgId}`);

      // Resolve double group insertion bug
      if (groupList.length > 1) {
        const lastEl = groupList[groupList.length - 1];
        lastEl.remove();
      }

      arrowGroup.translate(20, 20);

      arrowGroup.draggable();

      return current;
    });
    /*  const arrowGroup = svgFn.group();

    const arrowBody = arrowGroup
      .line(0, 50, 150, 50)
      .move(20, 20)
      .stroke({ color: "#f06", width: 3, linecap: "round" });

    arrowBody.marker("end", 5, 3, function (add) {
      add.polygon("0 0, 5 1.5, 0 3").fill("#f06");
    });

    arrowGroup.add(arrowBody);

    arrowGroup.draggable(); */
  };

  return (
    <ToolIcon
      title="Add Down Arrow"
      iconClass="bi-arrow-down"
      onClick={addEdge}
    />
  );
};

export default DownArrow;
