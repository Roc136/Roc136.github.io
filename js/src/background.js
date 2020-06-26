var bg_num=6,time=600000,bg_id=(Math.ceil(new Date().getTime() / time) % bg_num + 1).toString();
// var url="https://blog-roc.oss-cn-hongkong.aliyuncs.com/background/bj" + bg_id + ".jpg";
var url="/images/background/bj" + bg_id + ".jpg";
document.documentElement.style.setProperty('--bgurl', "url("+url+")");
console.log("背景id（每"+time/60000+"分钟改变一次）："+bg_id);