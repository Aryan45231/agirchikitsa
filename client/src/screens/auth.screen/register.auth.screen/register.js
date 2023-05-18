import React, { useContext, useState, useEffect } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";
import Component from "../../../components";
import { appColors } from "../../../res/colors";
import { NavIcons } from "../../../res/assets";
import "./index.css";
import Fonts from "../../../res/fonts";
import useViewmodel from "./registerViewModel";

export default function Register() {
  const {
    handleSubmit,
    loading,
    handleId,
    handleName,
    handleEmail,
    handlePassword,
    show,
    handleShow,
    isFormValid,
    handleDropdown,
  } = useViewmodel();
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="registerFlex">
      <div className="registerLogo">
        <NavIcons.Logo />
      </div>

      <Component.Spacer position={"top"} size={20} />

      <div className="registerLoginBtn">
        <Fonts.LightFont fontSize={30}>REGISTER</Fonts.LightFont>
        <Component.Spacer position={"top"} size={20} />

        <div className="singleInputStyle">
          <div className="inputHeading">
            <Fonts.RegularFont fontSize={16}> Employee ID:</Fonts.RegularFont>
          </div>

          <Component.Spacer position={"right"} size={10} />
          <Component.AuthInputField
            onChange={handleId}
            height={40}
            placeholder={"Employee ID"}
            type={"text"}
            marginTopBottom={10}
          />
          <div className="errorFieldWidth">
            {isFormValid.id && (
              <Fonts.RegularFont color="red" fontSize={14}>
                Please enter a valid Employee Id.
              </Fonts.RegularFont>
            )}
          </div>
        </div>

        <div className="singleInputStyle">
          <div className="inputHeading">
            <Fonts.RegularFont fontSize={16}>Name:</Fonts.RegularFont>
          </div>
          <Component.Spacer position={"right"} size={10} />
          <Component.AuthInputField
            onChange={handleName}
            height={40}
            placeholder={"Name"}
            type={"text"}
            marginTopBottom={10}
          />
          <div className="errorFieldWidth">
            {isFormValid.name && (
              <Fonts.RegularFont color="red" fontSize={14}>
                Please enter a valid Name.
              </Fonts.RegularFont>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="cars">
            <Fonts.RegularFont>Work Profile</Fonts.RegularFont>
          </label>
          <select
            id="workProfile"
            name="workProfile"
            className="dropdownMenuStyle"
            onChange={handleDropdown}
          >
            <option value="" defaultValue>
              Please select your Role
            </option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>
          <div>
            {isFormValid.selectedOption && (
              <Fonts.RegularFont color="red" fontSize={14}>
                please select a work profile.
              </Fonts.RegularFont>
            )}
          </div>
        </div>

        <div className="singleInputStyle">
          <div className="inputHeading">
            <Fonts.RegularFont fontSize={16}>Email:</Fonts.RegularFont>
          </div>
          <Component.Spacer position={"right"} size={10} />
          <Component.AuthInputField
            onChange={handleEmail}
            height={40}
            placeholder={"youremail@gmail.com"}
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
          <div className="inputHeading">
            <Fonts.RegularFont fontSize={16}>Password:</Fonts.RegularFont>
          </div>
          <Component.Spacer position={"right"} size={10} />
          <div className="singleInputStyle">
            <div className="passwordFieldStyle">
              <Component.AuthInputField
                placeholder={"Password"}
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
          text={"Register"}
          onClick={handleSubmit}
        />
        <Component.Spacer position={"top"} size={10} />
        <Component.Row>
          <Fonts.LightFont fontSize={18} padding={10}>
            Already have an account?
          </Fonts.LightFont>
          <Component.Spacer position={"left"} size={6} />
          <Fonts.RegularFont fontSize={18} padding={10}>
            <NavLink to="/">Login</NavLink>
          </Fonts.RegularFont>
        </Component.Row>
      </div>
    </div>
  );
}
