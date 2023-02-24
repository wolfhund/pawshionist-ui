import Navbar from './src/components/Navbar/Navbar';
import StorybookUI from './storybook';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const sample = require('./assets/cat.jpg');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <Navbar title="Pawshionist" />
      <Image style={{ width: '100%' }} source={sample} resizeMode={'cover'} />
    </View>
  );
};

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home">
              {() => (
                <Tab.Navigator
                  initialRouteName="Analitics"
                  screenOptions={{ headerShown: false }}
                >
                  <Tab.Screen name="Analitics" component={HomeScreen} />
                  <Tab.Screen name="Profile" component={DetailsScreen} />
                </Tab.Navigator>
              )}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

//module.exports = App;
module.exports = __DEV__ ? StorybookUI : App;
