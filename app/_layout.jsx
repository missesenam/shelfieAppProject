import { StyleSheet, Text, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
StatusBar;

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        <Stack.Screen name="index" options={{ title: "Home Page" }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
