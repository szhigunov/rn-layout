import React from 'react';
import {BarItem} from '../BarItem';
import {ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
}

export const BarOne: React.FC<Props> = ({style}) => (
  <BarItem style={style} name="Bar 1" bg="rgb(86,131,45)" />
);
