//录音转文字
/ * 
LOON.http-response ^ https://irecgo.softin-tech.com/user/info脚本路径= https://raw.githubusercontent.com/nkrwj/nkrwj/main/luwan， require-body = true，超时= 10，tag =录丸；
* / 
var body = $ response.body; //声明一个变量body并以响应消息体赋值
var obj = JSON.parse（body）; // JSON.parse（）将json形式的主体转换成对象处理

obj.userinfo.vip = [{“ id”：9848998，“ auth_type”：1，“ auth_value”：9581720330}];

正文= JSON.stringify（obj）; //重新打包回jsonjson 
$ done（{body}）; //结束修改
