import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles';

export class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChangeValue = value => {
    this.setState({value});
  };

  onClickConfirm = () => {
    const {value} = this.state;
    if (value > 9 || value < 1) {
      Alert.alert('Value should be between 1-9');
    } else {
      this.props.callback(value);
    }
  };

  onClickReset = () => {
    this.setState({value: ''});
    this.props.callback();
  };
  render() {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.titleStyle}>Select a Number between 1-9</Text>
        <TextInput
          style={styles.textInputStyle}
          textAlign="center"
          value={this.state.value}
          onChangeText={this.onChangeValue}
          keyboardType="numeric"
          numeric={true}
          placeholder="hii"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onClickReset}>
            <View style={[styles.buttonView, styles.purpleButton]}>
              <Text style={styles.buttonText}>RESET</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onClickConfirm}>
            <View style={[styles.buttonView, styles.redButton]}>
              <Text style={styles.buttonText}>CONFIRM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Card;
