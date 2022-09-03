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

const EdgesContainer = () => {
  return (
    <div>
      <ToolsSectionTitles titleText="Edges (Arrows)" />

      <div className="grid grid-cols-3 gap-1.5">
        <DownArrow />
      </div>
    </div>
  );
};

export default EdgesContainer;
