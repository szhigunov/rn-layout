import React from 'react';
import {Card} from '../Card';
import {ViewStyle} from 'react-native';

interface Props {
  style: ViewStyle;
}

export const MainBlock: React.FC<Props> = ({style}) => (
  <Card style={style} bg="rgb(208,181,126)" name="Main Block" />
);
