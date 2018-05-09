require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片相关数据
var imageDatas = require('../data/imageDatas.json');
console.log(imageDatas);
// 利用自执行函数，将图片名信息转成图片URL路径信息
var imageUrlArr = imageDatas.map((e, i) => {
  return e.fileName;
});
console.log(imageUrlArr);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
         <section className="img-sec">
         </section>
         <nav className="controller-nav">
         </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
