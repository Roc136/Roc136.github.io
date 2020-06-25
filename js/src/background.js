var bg_num = 6,bg_id = (Math.ceil(new Date().getTime() / 60000) % bg_num + 1).toString();
// url="https://blog-roc.oss-cn-hongkong.aliyuncs.com/background/bj" + bg_id + ".jpg";
var url="/images/background/bj" + bg_id + ".jpg";
document.documentElement.style.setProperty('--bgurl', "url("+url+")");
console.log("背景id（每分钟改变一次）："+bg_id);
console.log(new Date().getTime());