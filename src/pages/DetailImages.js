import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

//menginisialisasi variabel DetailImages
const DetailImages = ({route}) => {
  
  const {itemImage, itemTitle, itemWaktu, itemDescription } = route.params;
  return (
    <View style={{ flex: 1, marginLeft:15,}}>
      <Image
            source={{ uri: itemImage }}
            style={{  marginRight:15, marginTop: 15, 
              height: 360, width: 360, 
              /*resizeMode: 'contain'*/}}
          />
      <Text style={{fontWeight: 'bold', fontSize: 40}}>{itemTitle}</Text>
      <Text style={{fontStyle: 'italic', marginTop: 10}}>{itemWaktu}</Text>
      <Text>{itemDescription}</Text>
      </View>
  );
};

const style = StyleSheet.create({});

export default DetailImages;
