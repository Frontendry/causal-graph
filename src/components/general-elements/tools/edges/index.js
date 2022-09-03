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
      <h2 className="text-sky-500 mb-8 font-bold">Tool Box</h2>

      <ToolsSectionTitles titleText="Edges (Arrows)" />

      <div className="grid grid-cols-3 gap-1.5">
        <DownArrow />
      </div>
    </div>
  );
};

export default EdgesContainer;
