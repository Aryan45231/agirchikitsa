import styled from "styled-components";
import { appColors } from "./colors";
const Light = styled.p`
  display: flex;
  padding: ${({ padding }) => padding} px;
  margin: 0;
  color: ${({ color = appColors.textColor }) => color};
  font-family: Poppins;
  font-style: normal;
  cursor: ${({ cursor = "auto" }) => cursor};
  font-weight: 200;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
`;
const Regular = styled.p`
  display: flex;
  padding: ${({ padding }) => padding} px;
  margin: 0;
  color: ${({ color = appColors.textColor }) => color};

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
`;
const Medium = styled.p`
  display: flex;
  padding: ${({ padding }) => padding} px;
  margin: 0;
  color: ${appColors.textColor};

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
`;

const LightFont = ({
  fontSize = 16,
  children,
  color = appColors.textColor,
  lineHeight = 30,
  padding = 0,
  pointer = false,
}) => {
  return (
    <Light
      cursor={pointer ? "pointer" : "auto"}
      fontSize={fontSize}
      lineHeight={lineHeight}
      padding={padding}
    >
      {children}
    </Light>
  );
};
const RegularFont = ({
  fontSize = 16,
  children,
  lineHeight = 30,
  padding = 0,
  color = appColors.textColor,
}) => {
  return (
    <Regular
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      padding={padding}
    >
      {children}
    </Regular>
  );
};
const MediumFont = ({
  fontSize = 16,
  children,
  lineHeight = 30,
  color = appColors.textColor,
  padding = 0,
}) => {
  return (
    <Medium
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      padding={padding}
    >
      {children}
    </Medium>
  );
};

const Fonts = {
  LightFont,
  RegularFont,
  MediumFont,
};
export default Fonts;
