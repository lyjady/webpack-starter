//main.js 项目的js入口文件
//1.导入jquery
//import xxx from 'xxx' 是ES6中的导入模块的方式
//浏览器无法解析ES6的语法,这一行会报错
import $ from 'jquery'

//导入css样式表
//webpack只能处理JavaScript文件,无法处理其他的非JavaScript文件,需要手动安装第三方的加载器
//style-loader css-loader
import './css/index.css'

//导入less文件
import './css/index.less'

//导入bootstrap(不写node_modules也行,默认会去node_modules下找)
import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor', 'skyblue');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'FF0000'
    });
});

//class关键字是es6中的语法, 是用来实现es6中面向对象编程的方式
//webpack无法解析这个es6的语法,需要使用Babel将高级的语法转成低级的能够让webpack识别的语法
//需要安装两套包
//1. npm i babel-core babel-loader babel-plugin-transform-runtime -Dnpm,
//2. npm i babel-preset-env babel-preset-stage-0 -D
//3. 在webpack.config.js中添加相应的配置({test: /\.js$/, use: "babel-loader", exclude: "/node_modules"})
//4. 需要把node_modules给排除掉,不需要重新转换node_modules里面的js文件,而且就算转换了项目也无法启动
//5. 在项目的root目录中新建一个.babelrc Json格式的配置文件
class Person {
    static info = {name: 'zs', age: 12}
}
console.log(Person.info);
console.log("为什么执行两次?????");
console.log("那是因为在<script>中引用了bundle.js, 并且index.html页面又是使用HTMLWebPlugin这个插件生成的内存中的页面会在<body>尾行加上bundle.js的引用,也就是说index.html引用了两次bundle.js自然就执行两次了");
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