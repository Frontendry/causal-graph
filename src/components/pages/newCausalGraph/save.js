// Flatted
import { stringify } from "flatted";

// Components
import ToolIcon from "../../general-elements/tools/toolIcon";

// Context Store
import { useCanvasContext } from "../../../context/canvasContextStore";

const Save = () => {
  const { svgFn } = useCanvasContext();

  const saveProject = () => {
    const svgChildren = svgFn.children();

    const svgChildrenJsonString = stringify(svgChildren);

    // Add to Localstorage
    localStorage.setItem("causalGraph", svgChildrenJsonString);
  };
  return (
    <div className="absolute top-0 right-0 mt-3 mr-3">
      <ToolIcon title="Save Project" iconClass="bi-hdd" onClick={saveProject} />
    </div>
  );
};

export default Save;
