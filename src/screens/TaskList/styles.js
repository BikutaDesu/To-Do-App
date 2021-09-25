import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  taskList: {
    flex: 7,
  },
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 48,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 30,
  },
});
