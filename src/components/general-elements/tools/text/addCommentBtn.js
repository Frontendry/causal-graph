// React Modules
import { useEffect, useState } from "react";

// React ID Generator
import nextId from "react-id-generator";

// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

// General Button Component
import GeneralButton from "../generalButton";

const AddCommentBtn = () => {
  const { textInputRef, svgFn } = useCanvasContext();

  const [commentBox, setCommentBox] = useState(null);

  useEffect(() => {
    const textInputBox = textInputRef.current;

    if (textInputBox) {
      setCommentBox(textInputBox);
    }
  }, [textInputRef]);

  const addCommentText = () => {
    if (commentBox && commentBox.value !== "") {
      const textSvgId = nextId();

      // Add SVG Group with unique ID to main SVG 'Canvas'
      const parentTextGroup = svgFn.group().attr({
        id: `svgText${textSvgId}`,
      });

      // Add Text to the created group
      parentTextGroup.text(commentBox.value).font({
        fill: "#000",
        anchor: "middle",
      });

      // Move it from the left edges
      parentTextGroup.translate(120, 20);

      // Get width for the created group above
      const parentTextGroupWidth = parentTextGroup.width();

      // Context Menu Width and Height
      const contextMenuDim = {
        width: 70,
        height: 80,
      };

      const offset = 10; // context menu space from svg element

      // Dimensions to translate context menu
      const contextMenuXPosition =
        -contextMenuDim.width - parentTextGroupWidth / 2 - offset;

      const contextMenuGroup = parentTextGroup.group();
      contextMenuGroup.attr("class", "context-menu");
      contextMenuGroup.translate(contextMenuXPosition, -20);

      contextMenuGroup
        .rect(contextMenuDim.width, contextMenuDim.height)
        .fill("#64748b");

      contextMenuGroup
        .text(function (add) {
          add
            .tspan("Edit Text")
            .attr("class", "editText cursor-pointer")
            .newLine();
          add
            .tspan("Delete")
            .attr("class", "deleteItem cursor-pointer")
            .newLine();
        })
        .font({
          fill: "#fff",
          size: 12,
        })
        .leading(1.8)
        .dmove(8, 20);

      parentTextGroup.draggable();

      commentBox.value = "";
    }
  };

  return <GeneralButton buttonText="Add Comment" onClick={addCommentText} />;
};

export default AddCommentBtn;
