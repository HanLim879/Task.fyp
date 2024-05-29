import React, { useState } from 'react';
import {ScrollView, View,Button, Text, TouchableOpacity, TextInput} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function Todos() {
  const [todo, setTodo] = useState('');
  const ref = firestore().collection('todos');

  return (
    <View>
      <Text>View tasks</Text>
      <ScrollView style={{flex: 1}}>
        <Text>List of Tasks</Text>
      </ScrollView>
      <TextInput placeholder="helloworld" value={todo} onChangeText={setTodo} />
      <Button
        onPress={() => {}}
        title="Add TODO"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Todos;
