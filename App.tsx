import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Later, we will use Navigation and implement the logic as per the authentication. */}
      <Welcome />
      {/* <Register /> */}
    </SafeAreaView>
  );
}

export default App;
