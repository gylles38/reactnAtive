import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.titre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
