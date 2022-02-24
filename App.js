import { StatusBar, View } from 'react-native';
import { Box,Button,Text,NativeBaseProvider} from 'native-base';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { styles } from './styles';
import { useState } from 'react';

import Details from './src/components/details';
import Home from './src/components/home';

import  UsersDataContextProvider from './src/context/usersContext'

const navStack = createNativeStackNavigator();
export default function App() {

  return(
      <UsersDataContextProvider>

        <NativeBaseProvider>

        <NavigationContainer>
          <navStack.Navigator>

            <navStack.Screen name="home" component={Home}/>
            <navStack.Screen name="details" component={Details}/>
            
          </navStack.Navigator>
        </NavigationContainer>

        </NativeBaseProvider>

      </UsersDataContextProvider>
  )
}

