"use strict";var bg_id,time=6e5,bg_num=31,bgm_num=6,url="/images/background/bj"+(bg_id=window.innerWidth<768?"m"+(Math.ceil((new Date).getTime()/time)%bgm_num+1).toString():(Math.ceil((new Date).getTime()/time)%bg_num+1).toString())+".jpg";document.documentElement.style.setProperty("--bgurl","url("+url+")"),console.log("背景id（每"+time/6e4+"分钟改变一次）："+bg_id);var num=document.createElement("div");num.innerHTML=bg_num+bgm_num;var photo=document.getElementById("photo-count");photo.appendChild(num);