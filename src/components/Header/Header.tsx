import React from 'react';
import {View, StyleSheet} from 'react-native';
export const Header: React.FC = () => <View style={styles.view} />;

const styles = StyleSheet.create({
  view: {
    flex: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(62,73,29)',
  },
});
