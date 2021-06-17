//Essentials
import React from 'react';
import {SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';

import HomeScreen from './src/HomeScreen';

const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

class App extends React.Component {
  render() {
    return (
      <DismissKeyboard>
        <SafeAreaView style={{flex: 1}}>
          <HomeScreen />
        </SafeAreaView>
      </DismissKeyboard>
    );
  }
}

export default App;
