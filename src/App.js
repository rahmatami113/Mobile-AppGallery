/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import Routes from './Routes';
 
 const App = () => {
   return <Routes />;
 };
 
 export default App;
 /*import React, { useState, useEffect } from 'react';
 import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from "react-native";
 import Icon from 'react-native-vector-icons/FontAwesome';
 //import { TextInputEmail } from "./src/components/TextInputEmail"; //import dari file: TextInputEmail.js agar lebih rapih

 const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style = {{flex:1, backgroundColor: "#FFD6EC"}}>
        <StatusBar backgroundColor={"#FFD6EC"} barStyle="dark-content"/>
        <View style = {{flex:0, backgroundColor: "#FFFFFF"}}>
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
        }}>
            <Image
            source={require('./src/Gambar/pngwing.png')} 
            //sama sprti web design, untuk mengarakan ke asset gambar
            style={{width: 150, height: 150}} 
            />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}> 
            ALICE<Text style={{color: '#FF74B1'}}>iu</Text>
            </Text>
            <Text style={{marginTop: 15, marginBottom: 15, fontWeight: 'bold'}}> Login With Your Credential </Text>
        </View>
        </View>

        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 15}}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    width: 50,
                    borderTopLeftRadius: 15,
                    //borderBottomLeftRadius: 15,
                    elevation:5, //menambhakan shadow
                }}>
                    <Icon name="envelope" size={30} color="#bdbdbd" />
                </View>
                <TextInput
                value={email}
                style={{
                    backgroundColor: '#FFFFFF',
                    //marginHorizontal: 20,
                    //borderRadius: 15,
                    flex: 1,
                    //borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    paddingVertical: 15,
                    elevation:5, //menambhakan shadow
                }}
                placeholder='Masukkan e-mail'
                onChangeText={text => setEmail(text)} //agar inputan dpt ditampung
                /> 
            </View>

        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    width: 50,
                    borderTopLeftRadius: 15,
                    //borderBottomLeftRadius: 15,
                    elevation:5, //menambhakan shadow
                }}>
                    <Icon name="lock" size={30} color="#bdbdbd" />
                </View>
                <TextInput
                value={password}
                style={{
                    backgroundColor: '#FFFFFF',
                    //marginHorizontal: 20,
                    //borderRadius: 15,
                    flex: 1,
                    //borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    paddingVertical: 15,
                    elevation:5, //menambhakan shadow
                }}
                placeholder='Masukkan Password'
                onChangeText={text => setPassword(text)} //agar inputan dpt ditampung
                secureTextEntry={true}
                /> 
            </View>
        </View>
        
        <TouchableOpacity
        style={{
            backgroundColor: '#FF74B1',
            paddingVertical: 14,
            marginTop:20,
            marginHorizontal: 20,
            borderRadius: 15,
            elevation:2, //menambhakan shadow
        }}>
            <Text style={{
                color: '#FFFFFF', 
                textAlign: 'center',
                fontWeight: 'bold',
            }}> Login </Text>
        </TouchableOpacity>

        <View style={{marginHorizontal: 20, flexDirection: 'row'
        }}>
            <TouchableOpacity style={{flex:1}}>
                <Text style={{fontWeight: 'bold'}}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold'}}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  );
};
export default App; */