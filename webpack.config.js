const path = require('path');
const webpack = require('webpack'); //启动热更新第二步
//导入在内存中生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//这个配置文件起始就是一个js文件,通过Node中的模块操作,向外暴露了一个配置对象
module.exports = {
    //srcDir表示要打包的那个问价
    entry: path.join(__dirname, './src/main.js'),
    //输出文件的相关的配置
    output: {
        //指定打包好的文件输出到那个目录中
        path: path.join(__dirname, './dist'),
        //指定生成的文件名称
        filename: "bundle.js"
    },
    //第二种webpack-dev-server的配置参数
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true //启动热更新第一步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象,热更新的第三步
        //创建一个在内存中生成html页面的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板页面,根据这个页面生成内存中的页面
            filename: "index.html" //指定生成页面的名称
        })
    ],
    //这个节点用于配置所有的第三方加载器
    module: {
        rules: [
            //将css后缀的文件交给style-loader和css-loader进行处理
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};
//以后要重新打包只要直接输入指令webpack,会自动的读取配置文件中的配置进行打包