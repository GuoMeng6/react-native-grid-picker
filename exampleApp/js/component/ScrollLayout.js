import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import UI from 'UI';
import TitleView from './TitleView';
import GridPicker from '../GridPicker';

class ScrollLayout extends Component {
  render() {
    const timeStamp =
      this.props.timeStatus.endTime - this.props.timeStatus.startTime + 1;
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.scrollView, { height: 60 * timeStamp * 2 }]}>
          <TitleView
            timeStatus={this.props.timeStatus}
            timeLength={
              this.props.timeStatus.endTime -
              this.props.timeStatus.startTime +
              1
            }
          />
          <GridPicker
            coordinate={{
              row:
                (this.props.timeStatus.endTime -
                  this.props.timeStatus.startTime +
                  1) *
                2,
              column: 7,
            }}
            displayData={this.props.displayData}
            onSelectedChanged={this.props.onSelectedChanged}
            type="COLUMN"
            itemStyle={{ width: 120, height: 60 }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    width: UI.size.deviceWidth,
    height: UI.size.deviceHeight - 80,
  },
  scrollView: {
    width: UI.size.deviceWidth,
    flexDirection: 'row',
  },
});

export default ScrollLayout;
