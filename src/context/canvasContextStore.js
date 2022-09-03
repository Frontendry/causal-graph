/**
 * --------------------------------------------------------------------------
 * Create Context to share across components
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */
import { createContext, useContext, useRef, useState } from "react";

const canvasContext = createContext();

export const CanvasContextProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const textInputRef = useRef(null);
  const [svgFn, setSvgFn] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentEditableTextCont, setCurrentEditableTextCont] = useState(null);

  // Shareable Data
  const contextVal = {
    svgFn,
    setSvgFn,
    canvasRef,
    textInputRef,
    editing,
    setEditing,
    currentEditableTextCont,
    setCurrentEditableTextCont,
  };

  return (
    <canvasContext.Provider value={contextVal}>
      {children}
    </canvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(canvasContext);
