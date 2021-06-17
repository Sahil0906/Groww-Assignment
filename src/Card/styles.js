import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    maxWidth: 350,
    height: 180,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 24,
    borderColor: 'rgb(240, 240, 240)',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 7,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonView: {
    width: 120,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  redButton: {
    backgroundColor: 'rgb(255, 69, 131)',
  },
  purpleButton: {
    backgroundColor: 'rgb(199, 80, 242)',
  },
  buttonText: {
    color: 'white',
  },
  textInputStyle: {
    borderBottomWidth: 1,
    width: 100,
    height: 50,
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
  lowerCardStyle: {
    width: '60%',
    maxWidth: 350,
    height: 190,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 24,
    borderColor: 'rgb(240, 240, 240)',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 7,
    backgroundColor: 'white',
  },
  lowerButtonView: {
    width: 120,
    height: 50,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedValueView: {
    width: 40,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
    borderWidth: 3,
    borderColor: 'rgb(199, 80, 242)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  selectedValueText: {
    fontSize: 18,
  },
});

export default styles;
