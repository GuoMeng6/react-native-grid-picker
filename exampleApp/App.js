/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import moment from 'moment';
import zhLocal from 'moment/locale/zh-cn';
import ReactPicker from './js';

moment.locale('zh-cn', zhLocal);

export default class App extends Component<{}> {
  render() {
    return (
      <ReactPicker
        timeStatus={{
          startTime: 8,
          endTime: 21,
          weekMoment: moment().startOf('week'),
        }}
      />
    );
  }
}
