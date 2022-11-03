import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputEmail = (props) => {
    return(
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
                    <Icon name="envelope" size={30} color="#bdbdbd" />
                    </View>
                    <TextInput
                    value={props.email}
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
                    onChangeText={text => props.setEmail(text)} //agar inputan dpt ditampung
                    />
                    </View>
                    </View>
                    );
                };
                export default TextInputEmail;