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
  const [currentEditableTextCont, setCurrentEditableTextCont] = useState(null);
  const [parentGroupEl, setParentGroupEl] = useState(null);
  const [parentGroupSet, setParentGroupSet] = useState(false);

  useEffect(() => {
    // Get textInputRef
    const textInputBox = textInputRef.current;

    // If available update state
    if (textInputBox) {
      setCommentBox(textInputBox);
    }
  }, [textInputRef]);

  const addCommentText = () => {
    // Context Menu Width and Height
    const contextMenuDim = {
      width: 70,
      height: 80,
    };

    const offset = 10; // context menu space from svg element

    if (commentBox && commentBox.value !== "") {
      let parentTextGroup;

      if (typeof parentTextGroup === "undefined") {
        parentTextGroup = "tests";
      } else {
        console.log(parentTextGroup);
      }

      /*       // Parent Text Group
      //  const parentTextGroup = parentGroupEl;

      if (editing !== true) {
        console.log("editing nott true");

        // Initialize Unique IDs
        const textSvgId = nextId();

        // Add SVG Group with unique ID to main SVG 'Canvas'

        parentGroupEl.attr({
          id: `svgText${textSvgId}`,
          class: "causal-graph-component",
        });

        // Important Data Sets
        parentGroupEl.data("editable", true);
        parentGroupEl.data("comment", commentBox.value);

        // Add Text to the created group
        const addedText = parentGroupEl.text(commentBox.value).font({
          fill: "#000",
          anchor: "middle",
        });

        // Move it from the left edges
        parentGroupEl.translate(200, 20);

        // Get width for the created group above
        const parentTextGroupWidth = parentGroupEl.width();

        // Dimensions to translate context menu
        const contextMenuXPosition =
          -contextMenuDim.width - parentTextGroupWidth / 2 - offset;

        const contextMenuGroup = parentGroupEl.group();
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

        parentGroupEl.draggable();

        commentBox.value = "";

        //setParentGroupEl(parentTextGroup);

        // Events
        parentGroupEl.dblclick(function () {
          const commentText = this.data("comment");
          const editable = this.data("editable");
          const editTextCta = this.findOne(".editText");

          // Show Context Menu
          contextMenuGroup.show();

          // Add Edit Text
          if (editTextCta && editable) {
            editTextCta.click(function () {
              //Enable Editing
              setEditing(true);

              // Update Text Input Value
              commentBox.value = commentText;

              // Update Current Editable Text Container
              setCurrentEditableTextCont(addedText);
            });
          }
        });
      } else {
        // Set Editing back to false
        setEditing(false);

        console.log("editing  true");
        // Get Current Comment Box Value
        const currentCommentBoxVal = commentBox.value;

        // Update Editable Text Container
        currentEditableTextCont.text(currentCommentBoxVal);

        // Update Parent Group Container's data-comment
        // parentGroupEl.data("comment", currentCommentBoxVal);
        setParentGroupEl((current) =>
          current.data("comment", currentCommentBoxVal)
        );

        //   setSvgFn(parentGroupEl.root());

        // Empty out comment box
        commentBox.value = "";
      } */
    }
  };

  return (
    <GeneralButton
      buttonText={editing ? "Edit Comment" : "Add Comment"}
      onClick={addCommentText}
    />
  );
};

export default AddCommentBtn;
