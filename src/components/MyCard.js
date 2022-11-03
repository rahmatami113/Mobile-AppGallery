import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const MyCard = props => {
  const { avatar, nama, title } = props;
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: avatar,
        }}
        style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }}
      />
      <View style={style.infoWrapper}>
        <Text style={style.name}>{nama}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontWeight: '700',
  },
});

MyCard.propTypes = {
  avatar: PropTypes.string,
  nama: PropTypes.string,
  title: PropTypes.string,
};

MyCard.defaultProps = {
  avatar:
    'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg',
  nama: '',
  title: '',
};

export default React.memo(MyCard);
