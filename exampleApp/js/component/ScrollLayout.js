import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import UI from 'UI';
import TitleView from './TitleView';
import GridLayout from './GridLayout';

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
        <View
          style={[
            styles.scrollView,
            { height: UI.size.rowHeight * timeStamp * 2 },
          ]}
        >
          <TitleView
            timeStatus={this.props.timeStatus}
            timeLength={
              this.props.timeStatus.endTime -
              this.props.timeStatus.startTime +
              1
            }
          />
          <GridLayout
            data={{
              timeLength:
                this.props.timeStatus.endTime -
                this.props.timeStatus.startTime +
                1,
              dayLength: 7,
            }}
            timeStatus={this.props.timeStatus}
            weekMoment={this.props.timeStatus.weekMoment}
            rentData={this.props.rentData}
            onSelectedChanged={this.props.onSelectedChanged}
            type="COLUMN"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: UI.size.rowHeight,
    width: UI.size.deviceWidth,
    height: UI.size.deviceHeight - UI.size.rowHeight - 20,
  },
  scrollView: {
    width: UI.size.deviceWidth,
    flexDirection: 'row',
  },
});

export default ScrollLayout;
