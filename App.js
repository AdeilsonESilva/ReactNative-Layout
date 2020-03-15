/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  // const {width, height} = useWindowDimensions();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.part1}>
              <Text style={styles.label}>width: {width}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Button</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.part2}>
              <Text style={styles.label}>height: {height}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    // height: height,
    minHeight: height,
    // padding: 20,
  },
  button: {
    backgroundColor: '#fff',
    // width: PixelRatio.getPixelSizeForLayoutSize(width * 0.3),
    width: width * 0.9,
    // height: PixelRatio.getPixelSizeForLayoutSize(height * 0.04),
    // height: PixelRatio.getPixelSizeForLayoutSize(30),
    height: 60,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(4),
    borderWidth: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  textButton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  part1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  part2: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {fontSize: 18, fontWeight: 'bold'},
});

export default App;
