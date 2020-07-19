var time=600000,bg_num = 31, bgm_num = 6;
if (window.innerWidth < 768) {
    var bg_id="m" + (Math.ceil(new Date().getTime() / time) % bgm_num + 1).toString(); //手机端背景
} else {
    var bg_id=(Math.ceil(new Date().getTime() / time) % bg_num + 1).toString(); //电脑端背景
}
var url="/images/background/bj" + bg_id + ".jpg";
document.documentElement.style.setProperty('--bgurl', "url("+url+")");
console.log("背景id（每"+time/60000+"分钟改变一次）："+bg_id);

var num = document.createElement("div");
num.innerHTML = bg_num + bgm_num;
var photo = document.getElementById("photo-count")
photo.appendChild(num);