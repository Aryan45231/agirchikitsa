import React from "react";
import "./index.css";
import styled from "styled-components";
import Fonts from "../../../../res/fonts";

const AuthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 43px 16px;
  gap: 10px;
  width: 516px;
  height: 149px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
`;
const AuthButton = ({ text }) => {
  <AuthBtn>{text}</AuthBtn>;
};

export const AuthComponents = {
  AuthButton,
};
