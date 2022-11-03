import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearnProps from './LearnProps';
import Icon from 'react-native-vector-icons/FontAwesome';

const LearnNetworking= ({ navigation }) => {
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
        console.log("halo");
        navigation.navigate('HomePage');
      }
    } catch (e) {
      console.error(e)
    }

    return null;
  };

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  return (
    <View style = {{flex:1, backgroundColor: "#FFD6EC"}}>
        <View style = {{flex:0, backgroundColor: "#FFFFFF"}}>
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
        }}>

          <Image
          style={{width: 150, height: 150}}
            source={{
              url: 'https://cdn.pixabay.com/photo/2021/08/15/23/45/lotus-6548939__340.png',
            }} 
            //sama sprti web design, untuk mengarakan ke asset gambar 
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
                />
                </View>
      <View style={{
        marginHorizontal: 20, 
        marginTop: 15, 
        elevation: 5,
        }}>
      <Button onPress={() => getApiData()} title="Login" />
      {isLoading ? <ActivityIndicator /> : null}
      </View>
    </View>
    </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default LearnNetworking;
