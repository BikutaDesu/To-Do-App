import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '16%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneCheckbox: {
    height: 25,
    width: 25,
  },
  desc: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});
