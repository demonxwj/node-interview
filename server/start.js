const Service = require('node-windows').Service;
 
let svc = new Service({
  name: 'Start Hik-interview',    //服务名称
  description: '开机自启hik-interview', //描述
  script: 'E:/hik-interview/server' //nodejs项目要启动的文件路径
});
 
svc.on('install', () => {
  svc.start();
  console.log('Start Hik-interview服务创建成功');
});

svc.on('uninstall', () => {
  console.log('Start Hik-interview服务卸载成功');
});

 
if(svc.exists){
	return svc.uninstall();
}
 
svc.install();