import React from 'react';
import {BarItem} from '../BarItem';
import {ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
}

export const BarTwo: React.FC<Props> = ({style}) => (
  <BarItem style={style} name="Bar 2" bg="rgb(130,121,99)" />
);
