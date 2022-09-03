/**
 * --------------------------------------------------------------------------
 * Component to hold canvas for SVG manipulation
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// Context Store
import { useEffect } from "react";
import { useCanvasContext } from "../../../context/canvasContextStore";

const Canvas = () => {
  // Get canvasRef and reference the canvas HTML Element below
  const { canvasRef } = useCanvasContext();

  /* useEffect(() => {
    const elements = canvasRef.current.querySelectorAll(
      ".causal-graph-component"
    );

    console.log(elements);
  }, [canvasRef]); */

  return <section id="canvas" className="w-4/5" ref={canvasRef}></section>;
};

export default Canvas;
