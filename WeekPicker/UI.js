import { Platform, Dimensions, PixelRatio } from 'react-native';
// import Dimensions from 'Dimensions';
// import PixelRatio from 'PixelRatio';

const deviceWidth = Dimensions.get('window').width; // 设备的宽度
const deviceHeight = Dimensions.get('window').height; // 设备的高度
const pixelRatio = PixelRatio.get();
const fontScale = PixelRatio.getFontScale(); // 返回字体大小缩放比例
const defaultPixel = 2; // iphone6的像素密度
// px转换成dp
const scale = Math.min(deviceHeight / 768, deviceWidth / 1024); // 获取缩放比例

const size = {
  deviceWidth,
  deviceHeight,
  lineWidth: 1 / pixelRatio,
  statusBarHeight: Platform === 'android' ? 24 : 20,
  navBarHeight: 44,
  widthScale: scale,
  rowWidth: (deviceWidth - scaleSize(120)) / 7,
  rowHeight: scaleSize(60),
  number58: scaleSize(58),
  number60: scaleSize(60),
  number80: scaleSize(80),
  number100: scaleSize(100),
  number120: scaleSize(120),
};
size.bottomSpace = size.deviceHeight > 610 ? 30 : 0;

/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
function setSpText(number) {
  number = Math.round(number * scale * pixelRatio / fontScale);
  return number / defaultPixel;
}

function scaleSize(number) {
  number = Math.round(number * scale);
  return number;
}

const UI = { size, scaleSize };
module.exports = UI;
