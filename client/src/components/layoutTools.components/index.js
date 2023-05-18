import { appColors } from "../../res/colors";
import Component from "../index";
import CustomCard from "./customCard";
import Fonts from "../../res/fonts";
import styled from "styled-components";
import "./index.css";
const PageHeading = ({ title, height = 50 }) => {
  return (
    <Component.LightContainer
      height={height}
      padding={0}
      borderColor={appColors.greenBorderColor}
    >
      <Component.Row
        style={{ height }}
        justifyContent="center"
        alignItems="center"
      >
        <Fonts.RegularFont fontSize={24} lineHeight={40}>
          {title}
        </Fonts.RegularFont>
      </Component.Row>
    </Component.LightContainer>
  );
};
const LayoutTools = {
  PageHeading,
  CustomCard,
};
export default LayoutTools;
