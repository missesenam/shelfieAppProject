import { Image, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import LightLogo from "../assets/img/logo_light.png";
import darkLogo from "../assets/img/logo_dark.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? darkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
