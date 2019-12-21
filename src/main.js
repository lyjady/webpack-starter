//main.js 项目的js入口文件
//1.导入jquery
//import xxx from 'xxx' 是ES6中的导入模块的方式
//浏览器无法解析ES6的语法,这一行会报错
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'skyblue');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'FF0000'
    });
});
//1.webpack能够处理JS文件的互相依赖关系
//2.webpack能够处理JS的兼容问题,把高级的浏览器不识别的语法转成低级的识别的语法
//运行指令 webpack srcDir -o destDir mode=development