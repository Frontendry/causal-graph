/**
 * --------------------------------------------------------------------------
 * Container to hold Edges/Arrows ToolBox Section
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// React Modules
import React from "react";

// ToolBox Section Title
import ToolsSectionTitles from "../toolsSectionTitle";

// Edge Shapes
import DownArrow from "./downArrow";
import RightArrow from "./rightArrow";

const EdgesContainer = () => {
  return (
    <div>
      <ToolsSectionTitles titleText="Edges (Arrows)" />

      <div className="grid grid-flow-col auto-cols-max gap-1">
        <DownArrow />
        <RightArrow />
      </div>
    </div>
  );
};

export default EdgesContainer;
