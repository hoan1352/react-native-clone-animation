import React from 'react';
import {Text, View} from 'react-native';
import AnimationStory from "react-native-animation-story";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <AnimationStory/>
    </View>
  );
};
export default App;
