/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import GridPicker from './js/GridPicker';

const dataSource = [];
const displayData = [
  {
    start: { x: 1, y: 1 },
    end: { x: 2, y: 2 },
    title: '8:00-8:30',
    subTitle: 'breakfast',
  },
  {
    start: { x: 2, y: 3 },
    end: { x: 3, y: 5 },
    title: '9:00-10:00',
    subTitle: 'work',
  },
  {
    start: { x: 3, y: 1 },
    end: { x: 4, y: 4 },
    title: '8:00-9:30',
    subTitle: 'play game',
  },
];

class Btn extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.btn,
          { backgroundColor: this.props.selected ? '#1879dd' : '#ffffff' },
        ]}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: 16,
            color: this.props.selected ? '#ffffff' : '#222222',
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    for (let i = 0; i < 80; i++) {
      dataSource.push({ start: { x: i % 4, y: parseInt(i / 4) } });
    }
    this.state = {
      type: 'ROW',
    };
  }

  renderRow(data) {
    return (
      <View style={styles.rowStyle}>
        <View style={styles.rowView}>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      </View>
    );
  }

  displayRow(data) {
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

  onSelectedChanged(data) {
    console.log('onSelectedChanged  data = ', data);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.buttonView}>
          <View style={{ flexDirection: 'row' }}>
            <Btn
              text="ROW"
              selected={this.state.type === 'ROW'}
              onPress={() => {
                this.setState({ type: 'ROW' });
              }}
            />
            <Btn
              text="COLUMN"
              selected={this.state.type === 'COLUMN'}
              onPress={() => {
                this.setState({ type: 'COLUMN' });
              }}
            />
            <Btn
              text="ALL"
              selected={this.state.type === 'ALL'}
              onPress={() => {
                this.setState({ type: 'ALL' });
              }}
            />
          </View>
        </View>
        <ScrollView
          style={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.scrollView, { height: 120 * 20 }]}>
            <GridPicker
              coordinate={{ row: 20, column: 4 }}
              dataSource={dataSource}
              renderRow={this.renderRow}
              displayData={displayData}
              displayRow={this.displayRow}
              clickRenderItem={this.clickRenderItem}
              type={this.state.type}
              onSelectedChanged={this.onSelectedChanged}
              itemStyle={{ width: 240, height: 120 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
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
  buttonView: {
    height: 100,
    marginTop: 20,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 15,
    marginLeft: 20,
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
