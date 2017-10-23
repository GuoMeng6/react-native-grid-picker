import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UI from 'UI';
import moment from 'moment';
import zhLocal from 'moment/locale/zh-cn';

const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

class HeadView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {day.map((data, index) => (
          <View
            key={data + index}
            style={{
              height: UI.size.rowHeight,
              width: (UI.size.deviceWidth - UI.size.number120) / 7,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  {moment
                    .unix(this.props.weekMoment.unix())
                    .add(index, 'day')
                    .format('ddd MM/DD')}
                </Text>
              </View>
              <View style={{ width: 1, backgroundColor: '#000000' }} />
            </View>
            <View style={{ height: 1, backgroundColor: '#000000' }} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    left: UI.size.number100,
    width: UI.size.deviceWidth - UI.size.number120,
    height: UI.size.rowHeight,
  },
});

export default HeadView;
