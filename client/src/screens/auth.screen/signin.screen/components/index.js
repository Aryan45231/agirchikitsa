import React from "react";
import "./index.css";
import styled from "styled-components";

const AuthBtn = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 43px 16px;
  gap: 10px;

  width: 516px;
  height: 149px;

  ${
    "" /* 
background: #FFFFFF; */
  }
  border: 2px solid #D1D5DB;
  border-radius: 6px;
`;
const AuthButton = ({ text }) => {
  <AuthBtn>{text}</AuthBtn>;
};
export const AuthComponents = {
  AuthButton,
};
