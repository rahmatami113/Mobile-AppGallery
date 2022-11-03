import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const LearnAsyncStorage = () => {
  const [myInput, setMyInput] = useState('');
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      alert('Store Data Success');
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async key => {
    try {
      let data = await AsyncStorage.getItem(key);
      console.log('ini data dari local storage: ', data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async key => {
    try {
      await AsyncStorage.removeItem(key);
      alert('Delet Success');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData('myData');
  }, []);

  return (
    <View>
      <TextInput
        onChangeText={text => {
          setMyInput(text);
        }}
        style={{ height: 50, borderWidth: 1 }}
      />
      <Button
        title="Save to Local Storage"
        onPress={() => {
          storeData('myData', myInput);
        }}
      />
      <Button
        title="Clear Local Storage"
        onPress={() => {
          removeData('myData');
        }}
        color={'red'}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default LearnAsyncStorage;
