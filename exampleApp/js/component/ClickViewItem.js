import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import UI from 'UI';
import moment from 'moment';

class ClickViewItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        activeOpacity={1}
        onPress={this.props.clearData}
        disabled={this.props.disabled}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14 }}>{this.props.title}</Text>
          <Text style={{ fontSize: 12 }}>{this.props.subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#00ffff',
    height: UI.size.rowHeight - 4,
    width: (UI.size.deviceWidth - UI.size.number120) / 7 - 4,
    borderRadius: 4,
  },
});

export default ClickViewItem;
