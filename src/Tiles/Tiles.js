import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export class Tiles extends React.PureComponent {
  render() {
    const {visible, value} = this.props;
    return (
      <View style={styles.container}>
        {visible && <Text style={styles.textStyle}>{value}</Text>}
      </View>
    );
  }
}

export default Tiles;
