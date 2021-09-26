import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import todayImage from '../../../assets/imgs/today.jpg';
import styles from './styles';

import Task from '../../components/Task';
import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../../commonStyles';

const TaskList = props => {
  const [state, setState] = useState({
    showDoneTasks: true,
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

  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

  const toggleFilter = () => {
    const showDoneTasks = !state.showDoneTasks;
    setState({showDoneTasks, tasks: state.tasks});
  };

  const toggleTask = taskId => {
    const tasks = [...state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });

    setState({tasks, showDoneTasks: state.showDoneTasks});
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={todayImage}>
        <View style={styles.iconBar}>
          <TouchableOpacity onPress={toggleFilter}>
            <Icon
              name={state.showDoneTasks ? 'eye' : 'eye-slash'}
              size={20}
              color={commonStyles.colors.secondary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <FlatList
          data={state.tasks.filter(task =>
            state.showDoneTasks ? task.doneAt === null : true,
          )}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} toggleTask={toggleTask} />}
        />
      </View>
    </View>
  );
};

export default TaskList;
