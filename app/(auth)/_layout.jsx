import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";
StatusBar;

const AuthLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default AuthLayout;
