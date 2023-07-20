import Navbar from './src/components/Navbar/Navbar';
import PetSearchBar from './src/components/PetSearchBar/PetSearchBar';
import Container from './src/components/Container/Container';
import PetCard from './src/components/PetCard/PetCard';
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
  const petPhoto = require('./assets/cat.jpg');
  const infoMock = {
    name: 'Snowflake',
    breed: 'Selkirk Rex',
    owner: { firstName: 'John', lastName: 'Connor', phone: '123-123-123' }
  };

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
      <Container>
        <PetSearchBar />
        <PetCard info={infoMock} photo={petPhoto}/>
        <PetCard info={infoMock} photo={petPhoto}/>
      </Container>
    </View>
  );
};

const DetailsScreen = () => <Text>test</Text>

const Home = () => {
  const petPhoto = require('./assets/cat.jpg');
  const infoMock = {
    name: 'Snowflake',
    breed: 'Selkirk Rex',
    owner: { firstName: 'John', lastName: 'Connor', phone: '123-123-123' }
  };
  return (<Container>
    <PetSearchBar />
    <PetCard info={infoMock} photo={petPhoto} />
    <PetCard info={infoMock} photo={petPhoto} />
  </Container>)
};



const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>            
          <Navbar title="Pawshionist" />
          <Tab.Navigator
            initialRouteName="Navigate"
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Register" component={DetailsScreen} />
          </Tab.Navigator>          
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

module.exports = App;
//module.exports = __DEV__ ? StorybookUI : App;
