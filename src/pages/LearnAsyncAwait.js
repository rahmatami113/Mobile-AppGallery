import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const LearnAsyncAwait = () => {
  const fungsi1 = async () => {
    let data = await new Promise((resolve, reject) =>
      setTimeout(() => resolve('Fungsi Satuuu dgn Timeout 2 detik '), 2000),
    );
    console.log(data);
  };
  const fungsi2 = () => {
    console.log('fungsi Duaa');
  };

  const fungsi3 = () => {
    return new Promise((resolve, reject) => {
      reject('ini contoh ketika terjadi error');
    });
  };

  const myFunction = async () => {
    try {
      await fungsi1();
      fungsi2();
      //   fungsi3();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    myFunction();
  }, []);

  return <View></View>;
};

const style = StyleSheet.create({});

export default LearnAsyncAwait;
