//桃子视频

/*

LOON.http-response ^https://irecgo.softin-tech.com/user/info script-path=https://raw.githubusercontent.com/nkrwj/nkrwj/main/luwan, requires-body=true, timeout=10, tag=录丸;

*/

var body = $response.body; // 声明一个变量body并以响应消息体赋值

var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理


obj.result.vipType= 1;
obj.result.vipvalidDate= 9999999999999;

body = JSON.stringify(obj); // 重新打包回json字符串

$done({body}); // 结束修改
