import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboveTheFold: {
    flex: 4,
  },
  sideBlock: {
    minHeight: 400,
    flexWrap: 'nowrap',
    flex: 1,
  },
  ctaBlock: {height: 250, flex: 0, width: '100%'},
  colView: {flexDirection: 'column', flex: 1},
  rowView: {flexDirection: 'row', flex: 1},
  rowReverseView: {flexDirection: 'row-reverse', flex: 1},
  flex: {flex: 1},
});

export default styles;
