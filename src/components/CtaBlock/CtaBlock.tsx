import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from '../Card';
import {
  Text,
  ViewStyle,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

interface Props {
  style: ViewStyle;
}

export const CtaBlock: React.FC<Props> = ({style}) => (
  <Card style={style} name="CTA Block" bg="rgb(193,190,92)">
    <View style={styles.view}>
      <LinearGradient
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgb(234, 171, 14)', 'rgb(249, 212, 47)']}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>Click here!</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#000'},
  gradient: {borderRadius: 25},
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 136,
  },
});
