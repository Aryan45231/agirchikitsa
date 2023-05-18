import styled, { keyframes } from "styled-components";
import { BsX } from "react-icons/bs";
import { appColors } from "../../res/colors";
import "./index.css";
import Fonts from "../../res/fonts";
import {
  TextField as MuiTextField,
  Alert as MuiAlert,
  CircularProgress as MuiCircularProgress,
  Modal as MuiModal,
  styled as muiStyled,
} from "@mui/material";
const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};
const ChildContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;
const getVariant = (position, size) => {
  const property = positionVariant[position];
  return `${property}:${size}px`;
};

const SpacerView = styled.div`
  ${({ variant }) => variant};
`;
const Row = ({
  justifyContent = "flex-start",
  alignItems = "stretch",
  children,
  style,
  flexWrap = "nowrap",
}) => {
  return (
    <ChildContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={"row"}
      style={style}
    >
      {children}
    </ChildContainer>
  );
};
const Column = ({
  justifyContent = "flex-start",
  alignItems = "stretch",
  children,
  style,
  flexWrap = "nowrap",
}) => {
  return (
    <ChildContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={"column"}
      style={style}
    >
      {children}
    </ChildContainer>
  );
};
const Spacer = ({ position, size, children }) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
const CustomButton = styled.button`
  color: ${({ textColor = appColors.baseColor }) => textColor};
  background-color: ${({ backgroundColor = appColors.greenBorderColor }) =>
    backgroundColor};
  border: 1px solid ${appColors.greenBorderColor};
  border-radius: 6px;
  font-size: 16px;
  height: 40px;
  padding: 0 16px;
  cursor: pointer;
  disabled: ${({ disabled = false }) => disabled};
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    background-color: #ecfffc;
    border: 2px solid #00c1a3;
    cursor: pointer;
    color: black;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  }
`;
const Button = ({
  children,
  mode = "fill",
  onClick,
  disabled = false,
  title,
}) => {
  if (disabled) {
    return <DisabledButton title={title} />;
  }
  return (
    <CustomButton
      backgroundColor={
        mode === "fill"
          ? appColors.greenBorderColor
          : appColors.deleteButtonColor
      }
      textColor={mode === "fill" ? appColors.baseColor : appColors.textColor}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </CustomButton>
  );
};
const PaddingHolder = styled.div`
  padding: ${({ paddingTopBottom = 0, paddingLeftRight = 0 }) =>
    `${paddingTopBottom}px ${paddingLeftRight}px`};
`;
const GivePadding = ({
  children,
  paddingTopBottom = 0,
  paddingLeftRight = 0,
}) => {
  return (
    <PaddingHolder
      paddingTopBottom={paddingTopBottom}
      paddingLeftRight={paddingLeftRight}
    >
      {children}
    </PaddingHolder>
  );
};
function DisabledButton({ title, disabled = true }) {
  return (
    <button className="disbaledButton" disabled={disabled}>
      {title}
    </button>
  );
}
const deviceHeight = window.innerHeight;
const deviceWidth = window.innerWidth;
const TextField = muiStyled(MuiTextField)`
width:100%;
`;
const Alert = muiStyled(MuiAlert)``;
const CircularProgress = muiStyled(MuiCircularProgress)`
color:${appColors.greenBorderColor};
`;
const Container = styled.div`
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: 6px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: auto;
`;
const PaddingContainer = styled.div`
  padding: ${({ padding }) => `${padding}px`};
`;
const WhiteContainer = ({
  children,
  width,
  height,
  padding = 16,
  borderColor = appColors.defaultBorderColor,
}) => (
  <Container
    width={width}
    height={height}
    backgroundColor={appColors.baseColor}
    borderColor={borderColor}
  >
    <PaddingContainer padding={padding}>{children}</PaddingContainer>
  </Container>
);
export const LightContainer = ({
  children,
  width,
  height,
  padding = 16,
  borderColor = appColors.defaultBorderColor,
}) => (
  <Container
    width={width}
    height={height}
    backgroundColor={appColors.lightColor}
    borderColor={borderColor}
  >
    <PaddingContainer padding={padding}>{children}</PaddingContainer>
  </Container>
);

function IconButton({ onClick, children }) {
  return (
    <button
      style={{ margin: 0, padding: 0 }}
      className="iconButton"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
const CrossButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <BsX />
    </IconButton>
  );
};
const Model = ({ children, width, open, height, padding = 16 }) => {
  return (
    <MuiModal open={open}>
      <div className="modelContainer" style={{ padding }}>
        <WhiteContainer width={width} height={height}>
          {children}
        </WhiteContainer>
      </div>
    </MuiModal>
  );
};
const CircularProgressIndicator = ({ width, height }) => {
  return (
    <Column
      style={{ width, height }}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Column>
  );
};
const LinearMovingSentence = ({ text }) => {
  return (
    <div className="moving-sentence">
      <p className="sentence">{text}</p>
    </div>
  );
};

const Input = styled.input`
  width: 250px;
  height: 50px;
  padding: 0px 10px;
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border-style: none;
  background-color: #f3f6f8;
`;
const InputField = ({ onChange, type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} onChange={onChange} />;
};

const AuthINput = styled.input`
  width: ${({ width = 250 }) => width}px;
  height: ${({ height = 50 }) => height}px;

  padding: ${({ paddingTop = 0 }) => paddingTop}px
    ${({ paddingRight = 10 }) => paddingRight}px;
  ${({ paddingBottom = 0 }) => paddingBottom}px
  ${({ paddingLeft = 10 }) => paddingLeft}px;

  margin: ${({ marginTopBottom = 10 }) => marginTopBottom}px
    ${({ marginLeftRight = 0 }) => marginLeftRight}px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  background-color: #fff;
  &:focus {
    border-color: #00C1A3;
    outline: none;
  }
`;
const AuthInputField = ({
  onChange,
  type,
  style,
  placeholder,
  marginTopBottom,
  marginLeftRight,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  height,
}) => {
  return (
    <AuthINput
      style={style}
      width={width}
      height={height}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      marginTopBottom={marginTopBottom}
      marginLeftRight={marginLeftRight}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      paddingTop={paddingTop}
    />
  );
};

const AuthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: ${({ width = 400 }) => width}px;
  height: ${({ height = 150 }) => height}px;
  background: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    background-color: #ecfffc;
    border: 2px solid #00c1a3;
    cursor: pointer;
    color: black;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  }
`;
const AuthButton = ({ text, color, width, height, onClick, type, loading }) => {
  return (
    <AuthBtn width={width} height={height} onClick={onClick} type={type}>
      <Fonts.LightFont color={color} fontSize={30}>
        {text}
      </Fonts.LightFont>
      {loading && (
        <div className="LoadingAnimation">
          <LoadingAnimation width={20} height={20} thickness={3} speed={0.7} />
        </div>
      )}
    </AuthBtn>
  );
};

const DropdownField= styled.select`
  width: ${({ width = 250 }) => width}px;
  height: ${({ height = 45 }) => height}px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  color: #4c5863;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;


const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CustomLoader = styled.div`
  display: inline-block;
  width: ${({ width = 40 }) => width}px;
  height: ${({ height = 40 }) => height}px;
  border: ${({ thickness = 6 }) => thickness}px solid
    ${({ color = "#00C1A3" }) => color};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${LoaderAnimation} ${({ speed = 0.7 }) => speed}s ease-in-out
    infinite;
`;
const LoadingAnimation = ({ speed, thickness, color, width, height }) => {
  return (
    <CustomLoader
      width={width}
      height={height}
      speed={speed}
      thickness={thickness}
      color={color}
    />
  );
};
const Tools = {
  AuthButton,
  InputField,
  AuthInputField,
  Row,
  Column,
  Spacer,
  Button,
  TextField,
  Alert,
  CircularProgress,
  WhiteContainer,
  Container,
  LightContainer,
  deviceHeight,
  deviceWidth,
  DisabledButton,
  Model,
  IconButton,
  CrossButton,
  GivePadding,
  CircularProgressIndicator,
  LinearMovingSentence,
  LoadingAnimation,
};
export default Tools;
