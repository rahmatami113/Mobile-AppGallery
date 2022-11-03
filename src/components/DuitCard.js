import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const DuitCard = props => {
  const { title, duit, jam } = props;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 15,
      }}> 
      <View>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontWeight: '700', color: '#FF74B1' }}>{title}</Text>
          <Text>{jam}</Text>
        </View>
      </View>
      <View>
        <Text>{duit}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

DuitCard.propTypes = {
  title: PropTypes.string,
  jam: PropTypes.string,
  duit: PropTypes.string,
};

DuitCard.defaultProps = {
  title: 'Ini title default',
  jam: '10 PM',
  duit: 'Rp. 100000',
};

export default React.memo(DuitCard);
