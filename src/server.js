
//参考 https://www.jianshu.com/p/368d41088839 
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urlLib = require("url");

http.createServer(function(req, res){
	
	// var str = '';
	// req.on('data' , function(data){
	// 	str += data;
	// });
	// req.on('end' , function(){
	//
	// });
	
	var obj = urlLib.parse(req.url , true);
    const url = obj.pathname;
    // const GET = obj.query;
    // const POST = querystring.parse(str);
	
	var file_name = '.' + url;
	if(file_name.indexOf('html')<0){
		file_name += '.html';
	}

	fs.readFile(file_name , function(err , data){
		if(err){
			// 输出 JSON 格式
			res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
		  	res.write(file_name + ' 不存在 !');
		}else{
		  res.write(data);
		}
		res.end();
	});
	  
}).listen(3000);
console.log('服务启动了,端口 3000 ');