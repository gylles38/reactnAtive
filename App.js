<script src="http://localhost:8097"></script>;

import React, {useState} from 'react';
import GoalItem from './components/GoalItem';

import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {ident: Math.random().toString(), valeur: enteredGoal},
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <FlatList
        keyExtractor={(zut, index) => zut.ident}
        data={courseGoals}
        renderItem={monItem => <GoalItem titre={monItem.item.valeur} />}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },

});
