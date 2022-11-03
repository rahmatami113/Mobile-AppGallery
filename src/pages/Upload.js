import React, { useState, useEffect } from 'react';
import { View, Image, Button, TouchableOpacity, TextInput, Text, ActivityIndicator, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const createFormData = (photo, title, description) => {
  //CreateFormData untuk membuat data img yg di upload
  const data = new FormData(); //simpan data

  data.append('image', {
    // Form data yg ada di dlm body API
    name: photo.assets[0].fileName,
    type: photo.assets[0].type,
    uri: photo.assets[0].uri,
  });

  data.append('title', title);
  data.append('description', description);

  return data;
};

const Upload= () => {
  // state
  const [photo, setPhoto] = useState(null);
  const [token, setToken] = useState(''); //mengatur token?
  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChoosePhoto = () => {
    //function untuk choose image dari gallery
    launchImageLibrary({ mediaType: 'photo' }, response => {
      console.log(response)
      if (!response.didCancel) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
     //function untuk upload image / submit image
    setLoading(true);
    const formData = createFormData(photo, tittle, description); 
    //membuat form data yaitu dari photo, tittle, dan deskripsi yg diupload
    //sebelumnya kan hardcode "(photo, 'test', 'test-tami')"
    fetch('https://playgroundapi.com/bootcamp/api/web/posting/post-data', {
      //format yg digunakan untuk mengirim data image ke API POST DATA
      method: 'POST', 
      //mengirim/POST
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data;',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())  //Respon API
      .then(response => {
        console.log('response', response); /*Kalau response nya diterima/berhasil, 
        loadingnya akan berhenti, dan akan menampilkan alert Foto Berhasil Upload*/
        setLoading(false);
        Alert.alert('Berhasil di upload'); //pop-up jika berhasil di upload
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  };

  useEffect(() => { //melakukan pemanggilan data API ke Server
    const getToken = async () => {
      const tokenTemp = await AsyncStorage.getItem('token');
      setToken(tokenTemp);
    };
    getToken();
    setLoading(false);
  }, []);

  return (
  <View style={{flex: 2, backgroundColor: 'white'}}>
    <Text style={{fontSize: 18, marginBottom: 20, marginHorizontal: 25, marginTop: 25}}>Upload Your Images Here</Text>
    <TextInput
    value={tittle}
    style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingVertical: 15,
        marginHorizontal: 25, 
        paddingLeft: 15,
        elevation:5, //menambhakan shadow
    }}
    onChangeText={value => setTittle(value)} //agar inputan dpt ditampung
    placeholder="tittle"
    /> 
    
    <TextInput
    value={description}
    style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingVertical: 70,
        paddingTop: 10,
        marginTop: 25,
        marginHorizontal: 25, 
        paddingLeft: 15,
        elevation:5, //menambhakan shadow
    }}
    onChangeText={value => setDescription(value)} //agar inputan dpt ditampung
    placeholder="description"
    /> 
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{marginHorizontal: 25}}>
            {photo && ( //jika photo bernilai true,true. maka akan menampilkan gambar(?)
            //Operator AND logika ( && ) mengembalikan true jika kedua operan adalah true.
            <>
            <Image
            source={{ uri: photo.assets[0].uri }}
            style={{ width: 300, height: 300 }}
            />
        </>
        //jika button select ditaruh disini, button submit akan muncul setelah memilih photo
      )}
      
      <View style={{ textAlign: 'center'}}>
        <TouchableOpacity style={{ //button SELECT FILE
        backgroundColor: '#FF74B1', paddingVertical: 14, marginTop: 5,
        borderRadius: 5 //menambhakan shadow
      }} onPress={handleChoosePhoto}> 
      <Text style={{ color: '#FFFFFF', textAlign: 'center', 
      fontWeight: 'bold', marginHorizontal: 100}}> SELECT FILE <Icon name="image" size={15} color="#FFFFFF" /> </Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{ //button SUBMIT
            backgroundColor: '#FFA1CF', paddingVertical: 14,
            marginTop: 5,
            marginBottom:2,
            borderRadius: 5 //menambhakan shadow
          }} onPress={handleUploadPhoto} >
            <Text style={{ color: '#FFFFFF', textAlign: 'center', 
            fontWeight: 'bold'}}> SUBMIT </Text>
            </TouchableOpacity>

    {loading ? <ActivityIndicator /> : null}
    </View>
    </View>         
    </View>
    </View>
  );
};

export default Upload;
