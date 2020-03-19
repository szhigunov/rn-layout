import React from 'react';
import {View, Text, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {
  ThemeContext,
  IThemeStyles,
  ITheme,
} from '../../providers/ThemeProvider';

interface Props {
  name?: string;
  bg?: string;
  style?: ViewStyle;
}

const setBackgroundStyles = (bg?: string): ViewStyle | undefined =>
  bg ? {backgroundColor: bg} : undefined;

export const Card: React.FC<Props> = ({name, bg, style, children}) => {
  return (
    <ThemeContext.Consumer>
      {(theme: ITheme) => {
        const themeStyles = theme.styles[theme.theme];
        return (
          <View style={getStyles(style, themeStyles, setBackgroundStyles(bg))}>
            {name && (
              <View style={styles.view}>
                <Text style={getTextStyles(theme)}>{name}</Text>
              </View>
            )}
            {children}
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  view: {
    left: 16,
    top: 16,
    position: 'absolute',
  },
});

const getTextStyles = (theme: ITheme): TextStyle => ({
  fontWeight: '800',
  lineHeight: 16,
  color: theme.theme === 'light' ? '#fff' : '#000',
});

const getStyles = (
  style?: ViewStyle,
  themeStyles?: IThemeStyles,
  bgStyles?: ViewStyle,
): ViewStyle => ({
  flexWrap: 'wrap',
  ...(themeStyles || {}),
  ...(bgStyles || {}),
  ...(style || {}),
});
