import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Spacer = ({height}: {height: number}) => (
  <View style={{...styles.spacer, height}} />
);

const styles = StyleSheet.create({spacer: {width: '100%', flex: 0}});
