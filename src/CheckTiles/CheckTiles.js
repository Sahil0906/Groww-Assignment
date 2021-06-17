import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Tiles from '../Tiles';

export class CheckTiles extends React.PureComponent {
  constructor(props) {
    super(props);

    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = list.sort(() => Math.random() - 0.5);

    this.state = {
      data: shuffled,
      choicesLeft: 3,
      visible: new Array(9).fill(false),
    };
  }

  onPressTile = (item, index) => {
    const updatedState = [...this.state.visible];
    updatedState[index] = true;
    this.setState({
      visible: updatedState,
      choicesLeft: this.state.choicesLeft - 1,
    });

    if (this.state.choicesLeft > 1) {
      if (String(item) !== this.props.selectedValue) {
        Alert.alert(
          'Oops!!',
          `You have only ${this.state.choicesLeft - 1} chances left!!`,
        );
      } else {
        Alert.alert('Congratulations!!', 'You have won!!', [
          {
            text: 'Play again',
            onPress: () => this.props.onPressPlayAgain(),
          },
        ]);
      }
    } else {
      Alert.alert('Sorry!!', 'You have lost the game!!', [
        {
          text: 'Play again',
          onPress: () => this.props.onPressPlayAgain(),
        },
      ]);
    }
  };

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.onPressTile(item, index)}>
        <Tiles value={item} visible={this.state.visible[index]} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.selectedNumber}>Selected Number</Text>
        <View style={styles.selectedValueView}>
          <Text style={styles.selectedText}>{this.props.selectedValue}</Text>
        </View>
        <Text style={styles.textStyle}>Choose a tile</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item}
          renderItem={this.renderItem}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }
}

export default CheckTiles;
