import React from 'react';
import {Card} from '../Card';
import {StyleSheet, ViewStyle} from 'react-native';

interface Props {
  bg: string;
  style?: ViewStyle;
  name: string;
}

export const BarItem: React.FC<Props> = ({style, name, ...rest}) => {
  return <Card style={{...styles.card, ...style}} name={name} {...rest} />;
};

const styles = StyleSheet.create({
  card: {height: 200, flexGrow: 1, flexWrap: 'wrap'},
});
