import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LearnUseState = () => {
  let counter = 0;
  const [counterA, setCounterA] = useState(0);

  useEffect(() => {
    console.log('ini hanya sekali');
  }, []);

  useEffect(() => {
    console.log('counter : ' + counterA);
  }, [counterA]);

  useEffect(() => {
    console.log('counter bukan state : ', counter);
  }, [counter]);

  return (
    <View>
      <Text>{counter}</Text>
      <Text>{counterA}</Text>

      <Button
        title="Press Me"
        onPress={() => {
          setCounterA(counterA + 1);
          counter++;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default LearnUseState;
