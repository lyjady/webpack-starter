const path = require('path');
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
    }
};
//以后要重新打包只要直接输入指令webpack,会自动的读取配置文件中的配置进行打包