import React, { useContext, useState, useEffect } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";
import Component from "../../../components";
import { appColors } from "../../../res/colors";
import { NavIcons } from "../../../res/assets";
import "./index.css";
import Fonts from "../../../res/fonts";
import useViewmodel from "./signinViewModel";

export default function Signin() {
  const {
    handleSubmit,
    loading,
    handleEmail,
    handlePassword,
    isFormValid,
    show,
    handleShow,
  } = useViewmodel();
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="registerFlex">
      <div>
        <div className="registerLogo">
          <NavIcons.Logo />
        </div>
        <Component.Spacer position={"top"} size={50} />
        <div className="LoginScreen">
          <Fonts.LightFont fontSize={30}>LOGIN</Fonts.LightFont>
          <Component.Spacer position={"top"} size={20} />
          <div className="signinInputFieldAlign">
            <div className="singleInputStyle">
              <Component.AuthInputField
                onChange={handleEmail}
                placeholder={"email"}
                type={"email"}
                marginTopBottom={10}
              />
              <div className="errorFieldWidth">
                {isFormValid.email && (
                  <Fonts.RegularFont color="red" fontSize={14}>
                    please enter a valid email.
                  </Fonts.RegularFont>
                )}
              </div>
            </div>
            <div className="singleInputStyle">
              <div className="passwordFieldStyle">
                <Component.AuthInputField
                  placeholder={"password"}
                  type={show ? "text" : "password"}
                  onChange={handlePassword}
                />

                <div onClick={handleShow} className="passwordVisibleIcon">
                  {show ? <NavIcons.CloseEye /> : <NavIcons.OpenEye />}
                </div>
              </div>
              <div className="errorFieldWidth">
                {isFormValid.password && (
                  <Fonts.RegularFont color="red" fontSize={14}>
                    Password must contain atleast 8 character.
                  </Fonts.RegularFont>
                )}
              </div>
            </div>
          </div>

          <Component.Spacer position={"top"} size={10} />
          <Component.AuthButton
            loading={loading}
            width={200}
            height={50}
            fontSize={20}
            color={appColors.greenBorderColor}
            text={"Login"}
            onClick={handleSubmit}
          />
          <Component.Spacer position={"top"} size={10} />
          <Component.Row>
            <Fonts.LightFont fontSize={18} padding={10}>
              Don't have an account?
            </Fonts.LightFont>
            <Component.Spacer position={"left"} size={6} />
            <Fonts.RegularFont fontSize={18} padding={10}>
              <NavLink to="/register"> Register</NavLink>
            </Fonts.RegularFont>
          </Component.Row>
        </div>
      </div>
    </div>
  );
}
