import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from './app/screens/Home';
import { Colors } from './app/utils/Colors';
import DoctorList from './app/screens/DoctorList';
import Doctor from './app/screens/Doctor';
import { Icon } from 'native-base';
import Symptoms from './app/screens/Symptoms';
import Notification from './app/screens/Notification';
import UserProfile from './app/screens/UserProfile';
import Welcome from './app/screens/Welcome';
import SignUp from './app/screens/SignUp';
import SignIn from './app/screens/SignIn';
import { UserContext, UserProvider } from './app/context/Providers/UserContext';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Splash from './app/ui/Splash';

const Tab = createMaterialBottomTabNavigator();
const homeStack = createStackNavigator()
const authStack = createStackNavigator()
const stack = createStackNavigator()
const dashboardStack = createStackNavigator()

Axios.defaults.baseURL = 'http://10.0.2.2:5000/api/v1';

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <homeStack.Navigator initialRouteName="Home">
        <homeStack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <homeStack.Screen name="Doctors" component={DoctorList} options={{
          headerShown: false
        }} />
        <homeStack.Screen name="Doctor" component={Doctor} options={{
          headerShown: false
        }} />
      </homeStack.Navigator>
    </View>
  )
}

const AuthScreen = () => {
  
  return (
    <View style={styles.container}>
      <authStack.Navigator initialRouteName="Welcome">
        <authStack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false
        }} />
        <authStack.Screen name="SignUp" component={SignUp} options={{
            headerShown: false
        }} />
        <authStack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false
        }} />
      </authStack.Navigator>
    </View>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
    activeColor={Colors.medicalViolet}
    barStyle={{ 
      backgroundColor: Colors.medicalBackground1,
      width: '100%'
    }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" style={{color}} />
          ),
        }} />
      <Tab.Screen 
        name="Symptoms" 
        component={Symptoms}
        options={{
          tabBarLabel: 'Symptoms',
          tabBarIcon: ({ color }) => (
            <Icon type={"Feather"} name="scissors" style={{color}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon type={"Feather"} name="bell" style={{color}} />
            ),
        }}
      />
      <Tab.Screen 
        name="User" 
        component={UserProfile}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <Icon type={"Feather"} name="user" style={{color}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const DashboardScreen = () => {
  const [token, setToken] = useState<any>()

  const {isAuth, signin_error, getUserProfile, loading} = useContext(UserContext)

  console.log("loading == ", loading)

  
  useEffect(() => {
    const callback = async () => {
      const isTrue = await isAuth()
      setToken(isTrue)
    }
    
    getUserProfile()
    
    callback()
  }, [])

  if(loading){
    <Splash />
  }

  return (
    <stack.Navigator>
      {
        !token ?
        <>
          <stack.Screen name="Auth" component={AuthScreen} options={{
            headerShown: false
          }} />
          <stack.Screen name="SignIn" component={SignIn} options={{
            headerShown: false
          }} />
          <stack.Screen name="HomeTab" component={MyTabs}  options={{
            headerShown: false
          }} />
        </>
        :
        <>
          <stack.Screen name="HomeTab" component={MyTabs}  options={{
            headerShown: false
          }} />
          <stack.Screen name="Auth" component={AuthScreen} options={{
            headerShown: false
          }} />
        </>

      }
    </stack.Navigator>
  )
}

export default function App() {

  
  
  return (
    <NavigationContainer>
      <UserProvider>
        <DashboardScreen />
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.medicalBackground,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
