import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import UI from 'UI';
import moment from 'moment';
import enLocal from 'moment/locale/en-au';

const time = [];

class TitleView extends Component {
  constructor(props) {
    super(props);
    for (
      let i = props.timeStatus.startTime;
      i <= props.timeStatus.endTime;
      i++
    ) {
      time.push(
        moment
          .unix(props.timeStatus.weekMoment)
          .locale('en', enLocal)
          .add(i, 'hour')
          .format('hA'),
      );
    }
  }

  onScroll(y) {
    this.scrollView.scrollTo({ x: 0, y, animated: true });
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { height: UI.size.rowHeight * this.props.timeLength * 2 },
        ]}
      >
        {time.map((data, index) => (
          <View key={data + index} style={styles.itemView}>
            <View style={styles.rowView}>
              <View style={styles.centerView}>
                <Text style={{ fontSize: 12 }}>{data}</Text>
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
    width: UI.size.number100,
  },
  itemView: {
    height: UI.size.rowHeight * 2,
    width: UI.size.number100,
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TitleView;
