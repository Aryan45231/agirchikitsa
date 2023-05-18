import React from "react";
import { NavLink } from "react-router-dom";
import Component from "../../index";
import Fonts from "../../../res/fonts";
import "../index.css";
const Nav = ({ isActive, ActiveIcon, InActiveIcon, title }) => {
  return (
    <Component.Row alignItems="center">
      {isActive ? <ActiveIcon /> : <InActiveIcon />}
      <Component.Spacer position="left" size="10" />
      <Fonts.LightFont pointer={true} fontSize={16} lineHeight={32}>
        {title}
      </Fonts.LightFont>
    </Component.Row>
  );
};
export default function NavItem({ to, ActiveIcon, InActiveIcon, title }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "inActive")}
    >
      {({ isActive }) => (
        <Nav
          isActive={isActive}
          ActiveIcon={ActiveIcon}
          InActiveIcon={InActiveIcon}
          title={title}
        />
      )}
    </NavLink>
  );
}
