import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './pages/Login';
import LearnFlexBox from './pages/LearnFlexBox';
import LearnProps from './pages/LearnProps';
import LearnUseState from './pages/LearnUseState';
import LearnAsyncAwait from './pages/LearnAsyncAwait';
import LearnAsyncStorage from './pages/LearnAsyncStorage';
import LearnUseEffect from './pages/LearnUseEffect';
import HomeGallery from './pages/HomeGallery';
import DetailImages from './pages/DetailImages';
import Upload from './pages/Upload';

//import PageA from './pages/PageA';

const Stack = createNativeStackNavigator();
//membuat variabel "stack" => diambil dari createNativeStackNavigator

const Routes = () => { //fungsi/component baru "Routes" => langsung buat fungsinya
  return (
    //pembungkusnya NavigationContainer
    //didalam NavigationContainer terdapat stack navigator, 
    //fungsinya untuk menginisialisasi & mengelist/ada screen2 apa saja didalam aplikasi
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeGallery" component={HomeGallery} />
        <Stack.Screen name="DetailImages" component={DetailImages} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="LearnFlexBox" component={LearnFlexBox} />
        <Stack.Screen name="LearnProps" component={LearnProps} />
        <Stack.Screen name="LearnUseState" component={LearnUseState} />
        <Stack.Screen name="LearnAsyncAwait" component={LearnAsyncAwait} />
        <Stack.Screen name="LearnAsyncStorage" component={LearnAsyncStorage} />
        <Stack.Screen name="LearnUseEffect" component={LearnUseEffect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
