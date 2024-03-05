import React, { useEffect, createContext, useContext, useState } from "react";

import axios from "../services/api";
import request from "../services/requests";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    emailId: "",
    userType: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          setIsLoggedIn(true);
          const response = await axios.get(request.getusertype, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const { name, emailId, userType } = response.data;
          setUserData({ name, emailId, userType });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [clicked]: !prevState[clicked],
    }));
  };

  const logout = () => {
    console.log("LogOut button is pressed");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const updateAuthStatus = (status) => {
    setIsLoggedIn(status);
  };

  const setUserDataState = (details) => {
    setUserData((prevDetails) => ({
      ...prevDetails,
      ...details,
    }));
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        isClicked,
        screenSize,
        currentColor,
        currentMode,
        themeSettings,
        isLoggedIn,
        userData, 
        setActiveMenu,
        setIsClicked,
        handleClick,
        setScreenSize,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setMode,
        setColor,
        logout,
        updateAuthStatus,
        setUserData: setUserDataState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
