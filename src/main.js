//main.js 项目的js入口文件
//1.导入jquery
//import xxx from 'xxx' 是ES6中的导入模块的方式
//浏览器无法解析ES6的语法,这一行会报错
import $ from 'jquery'

//导入css样式表
//webpack只能处理JavaScript文件,无法处理其他的非JavaScript文件,需要手动安装第三方的加载器
//style-loader css-loader
import './css/index.css'

$(function () {
    $('li:odd').css('backgroundColor', 'skyblue');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'FF0000'
    });
});
//1.webpack能够处理JS文件的互相依赖关系
//2.webpack能够处理JS的兼容问题,把高级的浏览器不识别的语法转成低级的识别的语法
//运行指令 webpack srcDir -o destDir mode=development
//-----------------------------------------------------------------------
//1.webpack-dev-server工具能够实现"热部署",只要修改了main.js文件会就自动编译生成新的bundle.js文件在内存中而并不是将本地文件给覆盖
//将生成的bundle.js文件在服务器根目录给暴露出来。如果想让页面引用bundle.js文件就要修改index.html中的js文件的地址
//2.在webpack3的版本中不能直接使用webpack-dev-server启动服务需要在webpack.config.js文件中配置才能启动
// "scripts": {
//   "dev": "webpack-dev-server"
// }
//在webpack4中能够直接启动