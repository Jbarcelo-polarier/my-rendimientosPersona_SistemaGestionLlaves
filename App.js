import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import index from "./src/pages/index";
import PaginaTaquillas from "./src/pages/components/PaginaTaquillas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" component={index} />
          <Stack.Screen name="taquillas" component={PaginaTaquillas} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
