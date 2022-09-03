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

      const parentTextGroup = svgFn.group();

      parentTextGroup.attr("id", `svgText${textSvgId}`);

      parentTextGroup
        .text(commentBox.value)
        .font({
          fill: "#000",
          anchor: "middle",
        })
        .move(20, 20);

      parentTextGroup.draggable();

      commentBox.value = "";
    }
  };

  return <GeneralButton buttonText="Add Comment" onClick={addCommentText} />;
};

export default AddCommentBtn;
