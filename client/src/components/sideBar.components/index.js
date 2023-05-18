import { useContext } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Outlet } from "react-router-dom";
import { appColors } from "../../res/colors";
import Component from "../../components";
import "./index.css";
import { NavIcons } from "../../res/assets";
import NavItem from "./components";
import { AuthContext } from "../../context/auth.context";
const menuItemStyles = {
  padding: 10,
  "&:hover": {
    backgroundColor: "#f8f8f8",
    color: "black",
  },
};
const mainStyles = {
  backgroundColor: appColors.lightColor,
};
const deviceWidth = window.innerWidth;


export default function SideBar() {
  const { toggleSidebar, broken } = useProSidebar();
  const { setToken } = useContext(AuthContext);
  // const user = JSON.parse(localStorage.getItem("user"));
 const user = {
  roles:"admin"
 }

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };
  return (
    <div className="sidebarContainer">
      <Sidebar breakPoint="lg" backgroundColor="#fff">
        <div className="headerContainer">
          <div>
            <div className="logoSidebar">
              <NavIcons.LogoBig />
            </div>
            <Menu>
              <MenuItem
                rootStyles={menuItemStyles}
                component={
                  <NavItem
                    to="/home"
                    ActiveIcon={NavIcons.DasFill}
                    InActiveIcon={NavIcons.DasEmpty}
                    title="Dashboard"
                  />
                }
              >
                Dashboard
              </MenuItem>
              {["Manager","Supervisor"].includes(user.roles) && (
                  <MenuItem
                  rootStyles={menuItemStyles}
                  component={
                    <NavItem
                      to="/workManagement/assigntask"
                      ActiveIcon={NavIcons.WorkFill}
                      InActiveIcon={NavIcons.WorkEmpty}
                      title="Work Management"
                    />
                  }
                />
                  )}
              <MenuItem
                rootStyles={menuItemStyles}
                component={
                  <NavItem
                    to="/jankari"
                    ActiveIcon={NavIcons.WorkerFill}
                    InActiveIcon={NavIcons.WorkerEmpty}
                    title="Jankari"
                  />
                }
              >
               Jankari
              </MenuItem>
              <MenuItem
                rootStyles={menuItemStyles}
                component={
                  <NavItem
                    to="/feeds"
                    ActiveIcon={NavIcons.TaskHistoryEmpty}
                    InActiveIcon={NavIcons.TaskHistoryFill}
                    title="Your Feeds"
                  />
                }
              >
                Your Feeds
              </MenuItem>
            </Menu>
          </div>
          <div className="logOutButtonContainer">
            <Component.Button onClick={handleLogout} title="Logout">
              Logout
            </Component.Button>
          </div>
        </div>
      </Sidebar>
      <main
        style={{
          width: broken ? deviceWidth : deviceWidth - 250,
          ...mainStyles,
        }}
      >
        {broken && (
          <div className="hamburgerIcon">
            <button className="sb-button" onClick={() => toggleSidebar()}>
              <NavIcons.HamburgerIcon />
            </button>
            <div className="topLogo">
              <NavIcons.LogoBig />
            </div>
          </div>
        )}
        <Outlet context={broken} />
      </main>
    </div>
  );
}
