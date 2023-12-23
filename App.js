import React from 'react'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from './src/components/Navbar/Navbar'
import PetSearchBar from './src/components/PetSearchBar/PetSearchBar'
import Container from './src/components/Container/Container'
import PetCard from './src/components/PetCard/PetCard'
import RegisterPet from './src/screens/RegisterPet/RegisterPet'

const sample = require('./assets/cat.jpg')

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const queryClient = new QueryClient()

const PetList = () => {
  const petPhoto = require('./assets/cat.jpg')
  const petsData = [
    {
      name: 'Snowflake',
      breed: 'Selkirk Rex',
      owner: { firstName: 'John', lastName: 'Connor', phone: '123-123-123' },
    },
    {
      name: 'Whiskers',
      breed: 'Maine Coon',
      owner: { firstName: 'Sarah', lastName: 'Connor', phone: '456-456-456' },
    },
    // Add more pets as needed
  ]

  return (
    <Container>
      <PetSearchBar />
      {petsData.map((infoMock, index) => (
        <PetCard key={index} info={infoMock} photo={petPhoto} />
      ))}
    </Container>
  )
}

const HomeStack = () => {
  return (
    <>
      <Navbar title="Pawshionist" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PetList" component={PetList} />
      </Stack.Navigator>
    </>
  )
}

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Navigate"
              screenOptions={{ headerShown: false }}
            >
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Register" component={RegisterPet} />
            </Tab.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
