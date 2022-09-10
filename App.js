import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Gmrs from "./screen/Gmrs";
import Kgrs from "./screen/Kgrs";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Kg"
            component={Kgrs}
            options={{ title: "KG To RS Convert" }}
          />
          <Stack.Screen
            name="Gm"
            component={Gmrs}
            options={{ title: "GRUM To RS Convert" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
