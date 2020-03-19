import React from 'react';
import {Card} from '../Card';
import {ViewStyle} from 'react-native';

interface Props {
  style: ViewStyle;
}

export const SideBlock: React.FC<Props> = ({style}) => (
  <Card style={style} name="Side Block" bg="rgb(242,203,88)" />
);
