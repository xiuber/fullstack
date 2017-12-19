
//********用于访问前端*******************
window.origin="http://"+window.location['host'];
window.pathname=window.location['pathname'];
window.MyClickObj={};//事件对象
//********用于访问服务端*******************
window.configData={
    dataHost:"http://192.168.1.216:9010",
    // dataHost:"http://47.94.199.222"//线上的
};

//*************配置require加载js路径*********************
require.config({
    baseUrl: window.origin,
    waitSeconds: 0,
    paths: {
        jquery:'ext/jquery-3.0.0',
    },
    shim: {
        "jquery":{
            exports: "jquery"
        },
    }
});