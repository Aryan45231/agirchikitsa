import DasFillSvg from "./svg.assets/dasFill.svg";
import DasEmptySvg from "./svg.assets/dasEmpty.svg";
import WorkEmptySvg from "./svg.assets/workEmpty.svg";
import WorkFillSvg from "./svg.assets/workFill.svg";
import WorkerFillSvg from "./svg.assets/workerFill.svg";
import WorkerEmptySvg from "./svg.assets/workerEmpty.svg";
import TaskHistoryEmptySvg from "./svg.assets/taskHistoryEmpty.svg";
import TaskHistoryFillSvg from "./svg.assets/taskHistoryFill.svg";
import HamburgerIconSvg from "./svg.assets/hamburgerIcon.svg";
import LogoBigSvg from "./svg.assets/logoBig.svg";
import SearchIconSvg from "./svg.assets/searchIcon.svg";
import LogoSvg from "./svg.assets/logo.svg";
import OpenEyeSvg from "./svg.assets/openeye.svg";
import CloseEyeSvg from "./svg.assets/closeEye.svg";
import CrossButtonSvg from "./svg.assets/crossButton.svg";
const SvgComponent = ({
  src,
  alt,
  style = {
    width: 24,
    height: 24,
  },
}) => {
  return <img style={style} src={src} alt={alt} />;
};

const HamburgerIcon = () => (
  <SvgComponent
    src={HamburgerIconSvg}
    alt={"hamburgerIcon"}
    style={{ width: 30, height: 30 }}
  />
);
const CrossButton = () => (
  <SvgComponent
    src={CrossButtonSvg}
    alt={"CrossButton"}
    style={{ width: 40, height: 40 }}
  />
);
const LogoBig = () => (
  <SvgComponent
    src={LogoBigSvg}
    alt={"Logo Icon"}
    style={{ width: 200, height: 80 }}
  />
);
const Logo = () => (
  <SvgComponent
    src={LogoSvg}
    alt={"Logo Icon"}
    style={{ width: 300, height: 100 }}
  />
);
const SearchIcon = () => (
  <SvgComponent
    src={SearchIconSvg}
    alt={"Search Icon"}
    style={{ width: 30, height: 30 }}
  />
);
const OpenEye = () => (
  <SvgComponent
    src={OpenEyeSvg}
    alt={"OpenEye Icon"}
    style={{ width: 30, height: 30 }}
  />
);
const CloseEye = () => (
  <SvgComponent
    src={CloseEyeSvg}
    alt={"CloseEye Icon"}
    style={{ width: 30, height: 30 }}
  />
);
const DasFill = () => <SvgComponent src={DasFillSvg} alt={"dasFill"} />;
const DasEmpty = () => <SvgComponent src={DasEmptySvg} alt={"dasEmpty"} />;
const WorkEmpty = () => <SvgComponent src={WorkEmptySvg} alt={"workEmpty"} />;
const WorkFill = () => <SvgComponent src={WorkFillSvg} alt={"workFill"} />;
const WorkerFill = () => (
  <SvgComponent src={WorkerFillSvg} alt={"workerFill"} />
);
const WorkerEmpty = () => (
  <SvgComponent src={WorkerEmptySvg} alt={"workerEmpty"} />
);
const TaskHistoryEmpty = () => (
  <SvgComponent src={TaskHistoryEmptySvg} alt={"TaskHistoryEmptySvg"} />
);
const TaskHistoryFill = () => (
  <SvgComponent src={TaskHistoryFillSvg} alt={"TaskHistoryFillSvg"} />
);

export const NavIcons = {
  SearchIcon,
  OpenEye,
  CloseEye,
  HamburgerIcon,
  CrossButton,
  LogoBig,
  Logo,
  DasFill,
  DasEmpty,
  WorkEmpty,
  WorkFill,
  WorkerEmpty,
  WorkerFill,
  TaskHistoryEmpty,
  TaskHistoryFill,
};
