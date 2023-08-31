import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Welcome: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Welcome to MyNewProjectTest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

export default Welcome;