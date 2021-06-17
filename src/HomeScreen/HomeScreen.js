import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {UpperCard, LowerCard} from '../Card';
import CheckTiles from '../CheckTiles';

export class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      isStarted: false,
    };
  }

  setSelectedState = val => {
    this.setState({selectedValue: val});
  };

  onGameStarted = () => {
    this.setState({isStarted: true});
  };

  onRestartGame = () => {
    this.setState({isStarted: false, selectedValue: null});
  };

  render() {
    const {selectedValue} = this.state;
    return !this.state.isStarted ? (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Guess a Number</Text>
        </View>
        <Text style={styles.titleStyle}>Start a new Game</Text>
        <UpperCard callback={this.setSelectedState} />
        {selectedValue && (
          <LowerCard
            selectedValue={selectedValue}
            onPress={this.onGameStarted}
          />
        )}
      </View>
    ) : (
      <View style={styles.container}>
        <CheckTiles
          selectedValue={selectedValue}
          onPressPlayAgain={this.onRestartGame}
        />
      </View>
    );
  }
}

export default HomeScreen;
