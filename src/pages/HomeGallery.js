import React, { useEffect, useState } from 'react';
import { Button, TouchableOpacity, Alert, FlatList, ActivityIndicator,
    Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

//menginisialisasi variabel width(lebar) 
//(untuk mendapatkan screen yang sesuai dengan ukuran (lebar) window hp kita)
const width = Dimensions.get('window').width;

//menginisialisasi variabel HomeGallery
const HomeGallery = ({navigation}) => {
  //state/data => data yang berubah-ubah dalam komponen tersebut
  //digunkan: untuk menyimpan data sementara pada komponen
  //cth: saya membuat hal homegallery ini  dan ingin mengirimnya ke server.
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [token, setToken] = useState('');
    const [data, setData] = useState(null);
    const HandleGoto= screen => {
        //navigate utk pindah halaman sesuai screen yang dituju 
        //(membuat code lebih simple)
       navigation.navigate(screen);
    }
    
    const Item = ({ item }) => { 
      //fungsi/component "Item" => langsung buat fungsinya
      return (
        /*disini ketika salah satu gambar di HomeGallery dipilih,
        akan menuju ke hal DetailImages */
        <TouchableOpacity
          onPress={() =>
              {navigation.navigate('DetailImages', {
              itemId: item.id, //menginisialisasi id menjadi itemId
              itemImage: item.full_image_url, //menginisialisasi image menjadi itemImage
              itemTitle: item.title,
              itemWaktu: item.created_at,
              itemDescription: item.description,
            });
          }}>
          <Image
            source={{ uri: item.full_image_url }}
            style={{ height: 150, width: width / 3 }}
          />
        </TouchableOpacity>
      );
    };
    
    const renderItem = ({ item }) => <Item item={item} />;

  const fetchHomeData = async (tokenAPI) => {
    /*Fetch/FetchHomeData ini
      merupakan (API) atau fungsi dasar untuk meminta sumber daya melalui jaringan, 
      Secara dasar berhubungan dengan request & response (permintaan/tanggapan) */
    setLoading(true);
    console.log(tokenAPI);
    try {
      const getData = await fetch(
        'https://playgroundapi.com/bootcamp/api/web/posting/list-posting?page=' +
          page,
          /*format yg digunakan untuk mengirimkan list data image ke API, 
          untuk ditampilkan (dihalaman)*/
        {
          method: 'GET',
          //dapatkan data/get
          headers: {
            Authorization: 'Bearer ' + tokenAPI,
          },
        },
      );

      if (getData.status === 200) {
        const results = await getData.json();
        setData(results.data);
      }
      setLoading(false);

    } catch (e) {
      Alert.alert(e);
      setLoading(false);
    }
  };

  const loadNewPage = async () => {
    setLoading(true);
    setPage(page + 1);

    try {
      const getData = await fetch(
        'https://playgroundapi.com/bootcamp/api/web/posting/list-posting?page=' +
          page,
          /*format yg digunakan untuk mengirimkan list data image ke API, 
          untuk ditampilkan (dihalaman)*/
        {
          method: 'GET',
          //dapatkan data/get
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );

      if (getData.status === 200) {
        const results = await getData.json();
        data.push(results.data);
      }
      setLoading(false);

    } catch (e) {
      Alert.alert(e);
      setLoading(false);
    }
  };

  useEffect(() => { //melakukan pemanggilan data API ke Server
    const getTokenAndGetData = async () => {
      const tokenTemp = await AsyncStorage.getItem('token');
      setToken(tokenTemp);
      console.log('sebelum');
      fetchHomeData(tokenTemp);
      console.log('sesudah');
    };
    getTokenAndGetData();
    setLoading(false);
  }, []);

    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{ marginHorizontal: 20, marginTop: 35}}>
                    <Image 
                    source={{
                        uri: 'https://matamu.net/wp-content/uploads/2022/05/Foto-Hijab-Hitam-Aesthetics-576x1024.jpg'
                    }}
                    style={{width: 100, height: 100, borderRadius: 100 / 2}}
                    />
                    </View>
                    <View>
                        <Text style={{ marginTop: 10, fontSize: 18,
                            color: 'black', textAlign: 'left'}}> user_5 </Text>
                            
                            <TouchableOpacity style={{
                                backgroundColor: '#FFA1CF', paddingVertical: 14, marginTop:5,
                                borderRadius: 5 //menambhakan shadow
                            }} onPress={() => HandleGoto('Upload')}>
                                <Text style={{ color: '#FFFFFF', textAlign: 'center', 
                                fontWeight: 'bold', marginHorizontal: 85 }}> UPLOAD </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={{
                                    backgroundColor: '#FF74B1', paddingVertical: 14, marginTop: 5,
                                    borderRadius: 5, elevation:2, //menambhakan shadow 
                                }} onPress={() => HandleGoto('Login')}> 
                                <Text style={{ color: '#FFFFFF', textAlign: 'center', 
                                fontWeight: 'bold' }}> SIGN OUT </Text>
                                </TouchableOpacity>
                                </View>
                                </View>
                                
                                <View style={{marginTop: 15}}>
                                {loading ? <ActivityIndicator /> : null}
                                {data === null ? null : <FlatList
                                data={data}
                                numColumns={3}
                                renderItem={renderItem}
                                onEndReached={loadNewPage}
                                keyExtractor={item => item.id}
                                />}
                                </View>
                                </View>
                                );
                              };
                              const style = StyleSheet.create({

                              });
                              
                              export default HomeGallery;