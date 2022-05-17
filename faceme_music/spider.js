var music_url = "https://node.kg.qq.com/personal?uid=639d9b802529338a334d&stay=1"
var xhr = creatXHR();  //实例化XMLHttpRequest 对象
xhr.open("GET", music_url, false);  //建立连接
xhr.send(null);  //发送请求
console.log(xhr.responseXML);  //接收数据