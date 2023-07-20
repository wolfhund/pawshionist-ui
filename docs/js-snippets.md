# Previous way that I used for navigator: Stack/Tabs

Not the best way to do it...
```
<Stack.Navigator
    initialRouteName="Home1"
    screenOptions={{ headerShown: false }}
    >
    <Stack.Screen name="Home2">
        {() => (
        <Tab.Navigator
            initialRouteName="Navigate"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Register" component={DetailsScreen} />
        </Tab.Navigator>
        )}
    </Stack.Screen>
    <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```