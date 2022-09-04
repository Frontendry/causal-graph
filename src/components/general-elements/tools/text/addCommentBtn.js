// React Modules
import { useEffect, useState } from "react";

// React ID Generator
import nextId from "react-id-generator";

// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

// General Button Component
import GeneralButton from "../generalButton";

const AddCommentBtn = () => {
  const { textInputRef, svgFn, setSvgFn } = useCanvasContext();

  // Component Level States
  const [commentBox, setCommentBox] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentTextUpdating, setCurrentTextUpdating] = useState(null);
  /*   const [parentGroupEl, setParentGroupEl] = useState(null);
  const [currentEditableTextCont, setCurrentEditableTextCont] = useState(null); */

  useEffect(() => {
    // Get textInputRef
    const textInputBox = textInputRef.current;

    // If available update state
    if (textInputBox) {
      setCommentBox(textInputBox);
    }
  }, [textInputRef]);

  const addTextSvg = () => {
    // Context Menu Width and Height
    const contextMenuDim = {
      width: 70,
      height: 80,
    };

    const offset = 10; // context menu space from svg element

    // console.log(svgFn);

    if (commentBox && commentBox.value !== "") {
      // Initialize Unique IDs
      const textSvgId = nextId();

      if (editing === false) {
        setSvgFn((current) => {
          //const currentDup = current;

          // current.node.instance.findOne(`#svgText${textSvgId}`).remove();

          const parentTextGroup = current.group();

          // Add SVG Group with unique ID and some attributes to main SVG 'Canvas'
          parentTextGroup.attr({
            id: `svgText${textSvgId}`,
            class: "causal-graph-component",
          });

          const groupList = current.node.instance.find(`#svgText${textSvgId}`);

          if (groupList.length > 1) {
            const lastEl = groupList[groupList.length - 1];
            console.log(lastEl);
            lastEl.remove();
          }

          // Add Text to the created group
          const addedText = parentTextGroup
            .text(commentBox.value)
            .font({
              fill: "#000",
              anchor: "middle",
            })
            .attr({
              class: "comment-text-svg",
            });

          // Move it from the left edges
          parentTextGroup.translate(200, 20);

          // Get width for the created group above
          const parentTextGroupWidth = parentTextGroup.width();

          // Dimensions to translate context menu
          const contextMenuXPosition =
            -contextMenuDim.width - parentTextGroupWidth / 2 - offset;

          const contextMenuGroup = parentTextGroup.group();
          contextMenuGroup.attr("class", "context-menu");
          contextMenuGroup.translate(contextMenuXPosition, -20);

          //Context Menu Elements Addition
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

          // Hide Context Menu by Default
          contextMenuGroup.hide();

          parentTextGroup.draggable();

          commentBox.value = "";

          // Events
          parentTextGroup.dblclick(function () {
            const editTextCta = this.findOne(".editText");

            // Show Context Menu
            contextMenuGroup.show();

            // Add Edit Text
            if (editTextCta) {
              editTextCta.click(function () {
                const parents = this.parents(".causal-graph-component");
                const topMostParent = parents[parents.length - 1];
                const topMostParentId = topMostParent.attr("id");
                setCurrentTextUpdating(topMostParentId);

                const commentTextSvg =
                  topMostParent.findOne(".comment-text-svg");

                const commentText = commentTextSvg.text();

                //Enable Editing
                setEditing(true);

                // Update Text Input Value
                commentBox.value = commentText;
              });
            }
          });

          return current;
        });
      } else {
        // Get Current Comment Box Value
        const currentCommentBoxVal = commentBox.value;

        setSvgFn((current) => {
          const currentInstance = current.node.instance;

          const currentElEdited = currentInstance.findOne(
            `#${currentTextUpdating}`
          );

          const textNode = currentElEdited.findOne(".comment-text-svg");

          const contextMenu = currentElEdited.findOne(".context-menu");

          // Update Text
          textNode.text(currentCommentBoxVal);

          // Hide Context Menu
          contextMenu.hide();

          return current;
        });

        // Empty out comment box
        commentBox.value = "";

        // Set Editing back to false
        setEditing(false);
      }
    }
  };

  return (
    <GeneralButton
      buttonText={editing ? "Edit Comment" : "Add Comment"}
      onClick={addTextSvg}
    />
  );
};

export default AddCommentBtn;
