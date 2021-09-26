import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';

import moment from 'moment';
import 'moment/locale/pt-br';

import styles from './style';

const Task = props => {
  const [isTaskDone, setTaskDone] = useState(props.doneAt !== null);

  const descTaskDoneStyle = !isTaskDone
    ? null
    : {
        textDecorationLine: 'line-through',
      };

  const date = props.doneAt ? props.doneAt : props.estimateAt;
  const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        <CheckBox
          style={styles.doneCheckbox}
          fillColor="#4D7031"
          isChecked={props.doneAt ? true : false}
          onPress={() => {
            setTaskDone(!isTaskDone);
            props.toggleTask(props.id);
          }}
        />
      </View>
      <View>
        <Text style={[styles.desc, descTaskDoneStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
    </View>
  );
};

export default Task;
