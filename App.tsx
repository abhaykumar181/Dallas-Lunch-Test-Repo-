import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     {/* <Welcome /> */}
      {/* <Register /> */}
      <Home />
    </SafeAreaView>
  );
}

export default App;
