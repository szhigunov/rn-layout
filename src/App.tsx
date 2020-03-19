/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Header} from './components/Header/Header';

import styles from './App.styles';
import Home from './screens/home';
import {ThemeProvider} from './providers/ThemeProvider';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <ThemeProvider>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <Header />
            <Home />
          </ScrollView>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
