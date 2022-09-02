/**
 * --------------------------------------------------------------------------
 * Component to hold canvas for SVG manipulation
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// Context Store
import { useCanvasContext } from "../../../context/canvasContextStore";

const Canvas = () => {
  // Get canvasRef and reference the canvas HTML Element
  const { canvasRef } = useCanvasContext();

  return <section id="canvas" className="w-4/5" ref={canvasRef}></section>;
};

export default Canvas;
