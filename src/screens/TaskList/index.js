import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import todayImage from '../../../assets/imgs/today.jpg';
import styles from './styles';

import Task from '../../components/Task';
import {FlatList} from 'react-native-gesture-handler';

const TaskList = props => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

  const [state, setState] = useState({
    tasks: [
      {
        id: Math.random(),
        desc: 'Dar banho no Bruno 🛁',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Dar banho no Gabinho 🛁',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tomar meu naná 🥤',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tomar mais naná 🥤',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Comprar mais naná 🥤',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tomar água 🤮',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tomar banho 🛁',
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  });

  const toggleTask = taskId => {
    const tasks = [...state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });

    setState({tasks});
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={todayImage}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <FlatList
          data={state.tasks}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} toggleTask={toggleTask} />}
        />
      </View>
    </View>
  );
};

export default TaskList;
