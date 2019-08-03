/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Tapligh from 'tapligh-react-native';

const App = () => {
  Tapligh.initialize();
  Tapligh.setToken("8e4433e0-2e1c-41a2-97fd-5c98b7ed564d", false);

  var onAdResult = function(ad_result, token) {
    console.log('onAdResult');
  }

  onAdReward = function(reward) {
    alert("You have " + reward + " rewards!!");
  }

  var onAdReady = function(unit, token) {
    console.log(unit);
    Tapligh.showAd(unit, onAdResult, onAdReward)
  }

  var onLoadError = function(unit, error) {

  }

  var showImageAd = function() {
    Tapligh.loadAd("eba21377-7662-4b1d-94ab-2b4ff05d9ef6", onAdReady, onLoadError);
  }

   var showVideoAd = function() {
    Tapligh.loadAd("2cf846d0-9941-49f4-b468-f7903c6ebc80", onAdReady, onLoadError);
  }
   
   var showRewardedVideoAd = function() {
    Tapligh.loadAd("c026d3e0-6c83-43be-b967-484086a21361", onAdReady, onLoadError);
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tapligh Image Ad</Text>
              <View>
                <Button
                  onPress={showImageAd}
                  title="Show Ad"
                  color="#841584"
                />
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tapligh Video Ad</Text>
              <View>
                <Button
                  onPress={showVideoAd}
                  title="Show Ad"
                  color="#841584"
                />
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tapligh Rewarded Video Ad</Text>
              <View>
                <Button
                  onPress={showRewardedVideoAd}
                  title="Show Ad"
                  color="#841584"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
