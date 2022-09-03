/**
 * --------------------------------------------------------------------------
 * Container to hold all causal graph tools
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// React Modules
import { useEffect } from "react";

// SVG.js modules
import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";

// Import useCanvasContext
import { useCanvasContext } from "../../../context/canvasContextStore";

// ToolBox
import EdgesContainer from "../../general-elements/tools/edges";
import CommentInputSection from "../../general-elements/tools/text";

const ToolBox = () => {
  const { canvasRef, setSvgFn } = useCanvasContext();

  useEffect(() => {
    const canvasEl = canvasRef.current;

    // If canvasEl is not empty then....
    if (canvasEl && !canvasEl.querySelector("svg")) {
      // Initialize SVG.js
      const draw = SVG().addTo(canvasRef.current).size("100%", "100%");

      // Share draw variable on setSvgFn useCanvasContext's data value
      setSvgFn(draw);
    }
  }, [canvasRef, setSvgFn]);

  return (
    <section id="toolBox" className="w-1/5 border-r border-gray-200 p-4">
      <h2 className="text-sky-500 mb-8 font-bold">Causal Graph Tool Box</h2>
      <div className="grid grid-rows-1 gap-8">
        <EdgesContainer />
        <CommentInputSection />
      </div>
    </section>
  );
};

export default ToolBox;
