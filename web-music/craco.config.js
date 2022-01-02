const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {//exports少个s错了
  webpack:{
    alias:{
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  }
}
//craco.config.js文件直接定义在最外层目录下