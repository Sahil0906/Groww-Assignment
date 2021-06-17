import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  selectedNumber: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  selectedValueView: {
    height: 50,
    width: 40,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: 'rgb(199, 80, 242)',
    alignSelf: 'center',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedText: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
});

export default styles;
