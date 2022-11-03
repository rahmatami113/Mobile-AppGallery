import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DuitCard from '../components/DuitCard';
import MyCard from '../components/MyCard';

const LearnProps = () => {
  return (
    <View>
      <DuitCard title={'Bahan Makanan'} jam={'6:10 AM'} duit="50.000" />
      <DuitCard title={'Belanja'} jam={'7:10 AM'} duit="50.000" />
      <DuitCard title={'Parkir'} jam={'8:10 AM'} duit="10.000" />
  </View>
  );
};

const style = StyleSheet.create({});

export default LearnProps;
