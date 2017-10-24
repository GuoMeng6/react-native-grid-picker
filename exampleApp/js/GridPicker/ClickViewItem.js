import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ClickViewItem extends Component {
  render() {
    const { style, clearData, disabled, data } = this.props;
    const deepStyle = JSON.parse(JSON.stringify(style));
    delete deepStyle.backgroundColor;
    return (
      <TouchableOpacity
        style={[styles.container, deepStyle]}
        activeOpacity={1}
        onPress={clearData}
        disabled={disabled}
      >
        {this.props.displayRow || this.props.clickRenderItem ? (
          (this.props.displayRow && this.props.displayRow(data)) ||
          (this.props.clickRenderItem && this.props.clickRenderItem(data))
        ) : (
          <View
            style={[
              styles.view,
              { backgroundColor: style.backgroundColor || '#00ffff' },
            ]}
          >
            <Text style={{ fontSize: 14 }}>{data && data.title}</Text>
            <Text style={{ fontSize: 12 }}>{data && data.subTitle}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  view: {
    flex: 1,
    backgroundColor: '#00ffff',
    padding: 2,
  },
});

export default ClickViewItem;
