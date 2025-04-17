// index.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import CoreComponents from './CoreComponents';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CoreComponents />
    </SafeAreaView>
  );
};

export default App;
