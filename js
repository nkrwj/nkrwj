
//电视家
/*
loon.http-response ^http://47.95.69.248/api/v3/user/info script-path=https://raw.githubusercontent.com/nkrwj/nkrwj/main/js, requires-body=true, timeout=10, tag=电视家;
//MITM:47.95.69.248;
*/
//console.log（'测试写出日志'）; //输出日志

//$notification.post('title标题'，'subTitle子标题子标题子标题'，'body内容内容内容内容'）//用于通知栏提醒

var body = $ response.body; //声明一个变量body并以响应消息体赋值
var obj = JSON.parse（body）; // JSON.parse（）将json形式的主体转换成对象处理

obj.data.adEquityTime = 9999999999999;

正文= JSON.stringify（obj）; //重新打包回json字符串
$ done（{body}）; //结束修改
