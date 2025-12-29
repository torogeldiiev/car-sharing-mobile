import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VehicleDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Vehicle Detail Screen</Text>
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

export default VehicleDetailScreen;

