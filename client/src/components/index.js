import Tools from "./tools.components";
import SideBar from "./sideBar.components";
import LayoutTools from "./layoutTools.components";
const Component = {
    ...Tools,
    SideBar,
    ...LayoutTools,
};
export default Component;