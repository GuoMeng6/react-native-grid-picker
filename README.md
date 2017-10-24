# react-native-grid-picker

加载一个网格布局

<img src="https://github.com/GuoMeng6/react-native-grid-picker/tree/master/source/react-native-grid-picker.gif" width="250" /> 

## 安装

```
npm install react-native-grid-picker 
```

引入 ``GridPicker`` 组建

```
import GridPicker from 'react-native-grid-picker';
```

## 使用

```
const displayData = [
  {
    start: { x: 1, y: 1 },
    end: { x: 2, y: 2 },
    title: '8:00-9:00',
    subTitle: '早会',
  },
  {
    start: { x: 2, y: 3 },
    end: { x: 3, y: 6 },
    title: '9:00-12:00',
    subTitle: '上午时间',
  },
];

return (
  <View>
    <GridPicker
      coordinate={{ row:10, column:10 }}
      itemStyle={{ width: 120, height: 60 }}
      displayData={displayData}
      onSelectedChanged={currentItemIndex => console.log(currentItemIndex)}
      type="COLUMN"
    />
  </View>
)

```

## 例子
[Example](https://github.com/GuoMeng6/react-native-grid-picker/blob/master/exampleApp/App.js)

## API
| Prop | Type | Description |
|------|------|-------------|
| ``coordinate`` | ``对象`` | 两个属性，`row`定义表格的行数，`column`定义表格的列数 |
| ``itemStyle`` | ``对象`` | 定义小表格的样式 |
| ``dataSource`` | ``数组`` | 定义表格依赖的数据资源 |
| ``renderRow`` | ``函数`` | 返回一个可渲染的组建展示在小表格中 |
| ``displayData`` | ``数组`` | 显示在表格上面的内容。五个属性，``start`` 定义小表格起始点坐标，`end`定义小表格结束点坐标，`title`定义标题内容，`subTitle`定义次标题内容，`style`定义小表格样式，所有的属性数据在`displayRow`函数中可以拿到 |
| ``displayRow`` | ``函数`` | 返回一个可渲染的组建展示在小表格中，渲染的数据资源存放在`displayData`中 |
| ``clickRenderItem`` | ``函数`` | 返回一个可渲染的组建展示在小表格中，在点击后渲染 |
| ``type`` | ``字符串`` | `ROW`定义选择表格内容只可以横轴选择，`COLUMN`定义选择表格内容只可以纵向选择,`ALL`定义选择的表格内容既可跨行也可跨列,默认为 `ALL` |
| ``onSelectedChanged`` | ``函数`` | 表格当前选中项有变化时回掉，返回选中项的坐标 |



