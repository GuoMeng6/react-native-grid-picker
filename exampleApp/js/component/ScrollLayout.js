import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import UI from 'UI';
import TitleView from './TitleView';
import GridPicker from '../GridPicker';

class ScrollLayout extends Component {
  getDataSource() {
    const timeStamp =
      this.props.timeStatus.endTime - this.props.timeStatus.startTime + 1;
    const data = [];
    for (let i = 0; i < timeStamp * 2 * 4; i++) {
      data.push({ start: { x: i % 4, y: parseInt(i / 4) } });
    }
    return data;
  }

  renderRow(data, index) {
    return (
      <View style={styles.rowStyle}>
        <View style={styles.rowView}>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      </View>
    );
  }

  displayRow(data, index) {
    return (
      <View
        style={{
          width: (data.end.x - data.start.x) * 240,
          height: (data.end.y - data.start.y) * 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={[
            styles.displayRowView,
            {
              width: (data.end.x - data.start.x) * 240 - 20,
              height: (data.end.y - data.start.y) * 120 - 20,
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>{data.title}</Text>
          <Text style={{ fontSize: 14 }}>{data.subTitle}</Text>
        </View>
      </View>
    );
  }

  clickRenderItem(data) {
    return (
      <View
        style={{
          width: (data.end.x - data.start.x) * 240,
          height: (data.end.y - data.start.y) * 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={[
            styles.displayRowView,
            {
              width: (data.end.x - data.start.x) * 240 - 20,
              height: (data.end.y - data.start.y) * 120 - 20,
              backgroundColor: '#00ffff',
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>
            start:{JSON.stringify(data.start)}
          </Text>
          <Text style={{ fontSize: 16 }}>end:{JSON.stringify(data.end)}</Text>
        </View>
      </View>
    );
  }

  render() {
    const timeStamp =
      this.props.timeStatus.endTime - this.props.timeStatus.startTime + 1;
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.scrollView, { height: 120 * timeStamp * 2 }]}>
          {
            // <TitleView
            //   timeStatus={this.props.timeStatus}
            //   timeLength={
            //     this.props.timeStatus.endTime -
            //     this.props.timeStatus.startTime +
            //     1
            //   }
            // />
          }
          <View style={{ width: 100 }} />
          <GridPicker
            coordinate={{
              row:
                (this.props.timeStatus.endTime -
                  this.props.timeStatus.startTime +
                  1) *
                2,
              column: 4,
            }}
            dataSource={this.getDataSource()}
            renderRow={this.renderRow}
            displayData={this.props.displayData}
            displayRow={this.displayRow}
            clickRenderItem={this.clickRenderItem}
            onSelectedChanged={this.props.onSelectedChanged}
            itemStyle={{ width: 240, height: 120 }}
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
  rowStyle: {
    width: 240,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowView: {
    width: 220,
    height: 100,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayRowView: {
    borderRadius: 4,
    borderColor: '#000000',
    backgroundColor: '#ffe66f',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScrollLayout;
