

//电视家

//console.log('测试写出日志'); //输出日志

//$notification.post('title标题', 'subTitle子标题子标题子标题','body内容内容内容内容') //用于通知栏提醒




var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理


obj.data.adEquityTime= 9999999999999

body = JSON.stringify(obj); // 重新打包回json字符串
$done({body}); // 结束修改
