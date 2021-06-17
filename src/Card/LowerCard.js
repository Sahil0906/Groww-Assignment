import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export class Card extends React.PureComponent {
  render() {
    const {selectedValue} = this.props;
    return (
      <View style={styles.lowerCardStyle}>
        <Text style={styles.titleStyle}>You Selected</Text>
        <View style={styles.selectedValueView}>
          <Text style={styles.selectedValueText}>{selectedValue}</Text>
        </View>
        <View style={styles.lowerButtonContainer}>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={[styles.lowerButtonView, styles.redButton]}>
              <Text style={styles.buttonText}>START GAME</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Card;
