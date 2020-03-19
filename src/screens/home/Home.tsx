import React from 'react';
import {useDimensions} from '@react-native-community/hooks';
import {View} from 'react-native';

import styles from './Home.styles';

import {SideBlock} from '../../components/Side/Side';
import {CtaBlock} from '../../components/CtaBlock/CtaBlock';
import {BarOne} from '../../components/BarOne/BarOne';
import {BarTwo} from '../../components/BarTwo/BarTwo';
import {MainBlock} from '../../components/MainBlock/MainBlock';
import {Spacer} from '../../components/Spacer/Spacer';

export const Home: React.FC = () => {
  const {width} = useDimensions().window;
  const isLikeTablet = width >= 800;
  const sideBlockStyles = React.useMemo(
    () => ({...styles.sideBlock, ...getSideBlockStyles(isLikeTablet)}),
    [isLikeTablet],
  );

  return (
    <>
      <Spacer height={16} />
      <View
        style={{
          ...styles[isLikeTablet ? 'rowView' : 'colView'],
        }}>
        <View
          key="view"
          style={[styles.aboveTheFold, getAboveTheFoldStyles(isLikeTablet)]}>
          <MainBlock style={getMainBlockStyles(isLikeTablet)} />
          {!isLikeTablet && <Spacer height={16} />}
          <View style={getBarBlockStyles(isLikeTablet)}>
            <BarOne style={getBarOneStyles(isLikeTablet)} />
            {isLikeTablet && <Spacer height={16} />}
            <BarTwo style={getBarTwoStyles(isLikeTablet)} />
          </View>
          {!isLikeTablet && <Spacer height={16} />}
        </View>
        <SideBlock style={sideBlockStyles} />
      </View>
      <Spacer height={16} />
      <CtaBlock style={styles.ctaBlock} />
    </>
  );
};

const getBarOneStyles = (condition: boolean) => ({
  marginRight: !condition ? 8 : 0,
  flex: 1,
});

const getBarTwoStyles = (condition: boolean) => ({
  marginLeft: !condition ? 8 : 0,
  flex: 1,
});

const getAboveTheFoldStyles = (condition: boolean) => ({
  flex: 1,
  ...styles[condition ? 'rowReverseView' : 'colView'],
});

const getMainBlockStyles = (condition: boolean) => ({
  flex: condition ? 3 : 1,
  marginLeft: condition ? 16 : 0,
  marginRight: condition ? 16 : 0,
  minHeight: 400,
});

const getSideBlockStyles = (condition: boolean) => ({
  maxWidth: condition ? '20%' : '100%',
});

const getBarBlockStyles = (condition: boolean) => ({
  ...styles[condition ? 'colView' : 'rowView'],
  jusatifyContent: 'space-between',
  flexGrow: 1,
  width: '100%',
});
