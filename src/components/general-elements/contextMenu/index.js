const ContextMenu = (
  groupEl,
  commentBox,
  setCurrentTextUpdating,
  setEditing
) => {
  // Context Menu Width and Height
  const contextMenuDim = {
    width: 70,
    height: 80,
  };

  const offset = 10; // context menu space from svg element

  // Get width for the created group above
  const parentTextGroupWidth = groupEl.width();

  const editStatus = groupEl.data("editable");

  // Dimensions to translate context menu
  const contextMenuXPosition =
    -contextMenuDim.width - parentTextGroupWidth / 2 - offset;

  const contextMenuGroup = groupEl.group();
  contextMenuGroup.attr("class", "context-menu");
  contextMenuGroup.translate(contextMenuXPosition, -20);

  //Context Menu Elements Addition
  contextMenuGroup
    .rect(contextMenuDim.width, contextMenuDim.height)
    .fill("#64748b");

  const editBtnOption = (add) => {
    if (editStatus !== true) {
      return;
    }

    return add
      .tspan("Edit Text")
      .attr("class", "editText cursor-pointer")
      .newLine();
  };

  contextMenuGroup
    .text(function (add) {
      editBtnOption(add);
      add.tspan("Delete").attr("class", "deleteItem cursor-pointer").newLine();
    })
    .font({
      fill: "#fff",
      size: 12,
    })
    .leading(1.8)
    .dmove(8, 20);

  // Hide Context Menu by Default
  contextMenuGroup.hide();

  // Events
  groupEl.dblclick(function () {
    // Show Context Menu
    contextMenuGroup.show();

    if (editStatus === true) {
      const editTextCta = this.findOne(".editText");

      // Add Edit Text
      if (editTextCta) {
        editTextCta.click(function () {
          const parents = this.parents(".causal-graph-component");
          const topMostParent = parents[parents.length - 1];
          const topMostParentId = topMostParent.attr("id");
          setCurrentTextUpdating(topMostParentId);

          const commentTextSvg = topMostParent.findOne(".comment-text-svg");

          const commentText = commentTextSvg.text();

          //Enable Editing
          setEditing(true);

          // Update Text Input Value
          commentBox.value = commentText;
        });
      }
    }

    // Delete Elem
    const deleteElemCta = this.findOne(".deleteItem");

    deleteElemCta.click(function () {
      const parents = this.parents(".causal-graph-component");
      const topMostParent = parents[parents.length - 1];

      // Remove Selected El
      topMostParent.remove();

      // Fixes bug after deleting
      return this.node;
    });
  });

  return;
};

export default ContextMenu;
