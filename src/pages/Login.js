import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Text, View, TextInput, Button, Image, ActivityIndicator, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearnProps from './LearnProps';
import Icon from 'react-native-vector-icons/FontAwesome';

//menginisialisasi variabel login
const Login = ({ navigation }) => {
  //state/data => data yang berubah-ubah dalam komponen tersebut
  //digunkan: untuk menyimpan data sementara pada komponen
  //cth: saya membuat login form dan ingin mengirimnya ke server.
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getApiData = async () => {
    if (username === '' || password === '') {
      console.error('Username or password not filled');
      return null;
    }

    try {
      setIsLoading(true);
      const getData = await fetch(
        'https://playgroundapi.com/bootcamp/api/web/user/login',
        {
          //format yg digunakan untuk mendapatkan/Get data user login ke API
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );
      if (getData.status === 200) {
        const results = await getData.json();
        setMyData(results);
        setIsLoading(false);
        await AsyncStorage.setItem('token', results.data.token);
        console.log(results);
        //navigate utk pindah halaman
        navigation.navigate('HomeGallery');
      }
    } catch (e) {
      console.error(e)
    }

    return null;
  };

  useEffect(() => { //melakukan pemanggilan data API ke Server
    console.log(myData);
  }, [myData]);

  return (
    <View style = {{flex:1, backgroundColor: "#FFD6EC"}}>
      <StatusBar backgroundColor={"#FFD6EC"} barStyle="dark-content"/>
        <View style = {{flex:0, backgroundColor: "#FFFFFF"}}>
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 1,
        }}>

          <Image
          style={{width: 200, height: 200}}
            source={{
              uri: 'https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-beauty-vector-lotus-flowers-design-logo-template-icon-png-image_5578999.png',
            }} //sama sprti web design, untuk mengarakan ke asset gambar 
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
                value={username}
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
                onChangeText={value => setUsername(value)} //agar inputan dpt ditampung
                placeholder="Masukkan username"
                /> 
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
                onChangeText={value => setPassword(value)} //agar inputan dpt ditampung
                placeholder="Masukkan password"
                // agar password ter-enkripsi gitu
                secureTextEntry={true}/>
                </View>
                
                <TouchableOpacity style={{ //button SIGN IN
                  backgroundColor: '#FF74B1', paddingVertical: 14, marginTop: 15,
                  marginHorizontal: 20 , borderRadius: 5, 
                  elevation:2, //menambhakan shadow 
                }} onPress={() => getApiData()}>
                  <Text style={{ color: '#FFFFFF', textAlign: 'center', 
                  fontWeight: 'bold'}}> SIGN IN </Text>
                  </TouchableOpacity>
                  {isLoading ? <ActivityIndicator /> : null}
                  </View>
                  </View>
                  </View>
                  );
                };

const style = StyleSheet.create({});

export default Login;
