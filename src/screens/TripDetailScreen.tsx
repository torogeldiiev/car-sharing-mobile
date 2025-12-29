import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Trip Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TripDetailScreen;

