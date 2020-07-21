/**
 * JavaScript library for find the font color according to the background color
 * 
 * Author: A mile
 */
(function() {

    var root = document.documentElement;

    var TEXTColor = function(obj) {
        if(obj instanceof TEXTColor) return obj;
        if(!(this instanceof TEXTColor)) return new TEXTColor(obj);
    }

    if(typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = TEXTColor;
        }
        exports.TEXTColor = TEXTColor;
    } else {
        root.TEXTColor = TEXTColor;
    }

    function resBgColor(rgbArr) {
        var color = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
        return color? '#000000': '#ffffff'
    }

    TEXTColor.findTextColor = function findTextColor(colorValue) {
        // #123456或者rgb(12,34,56)转为rgb数组[12,34,56]
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var that = colorValue;
        if (/^(rgb|RGB)/.test(that)) {
            // 处理rgb转为数组
            var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            return resBgColor(aColor);
        } else if (reg.test(that)) {
            // 处理十六进制色值
            var sColor = colorValue.toLowerCase();
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return resBgColor(sColorChange);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
         ] : null;
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    //some colors from https://gist.github.com/ruanyf/e6c896df1c24d0236eb93d65144f2907
    function hksubcolor(rgbcolor) {
        var color_list=["#b51921","#b2103e","#c41832","#ef342a","#a84d18","#f68f26","#faca07","#07594a","#4ba946","#5fc0a7","#0376c2","#c41832","#c41832","#be3223","#f45f7c","#d16f20","#ffd00d","#076750","#7abf45","#75c7b9","#077cb0","#29409a","#ee1e4f","#d2174a","#f79d8b","#ce7020","#e9a519","#fddf55","#076a66","#a7c299","#098ec4","#89d2e3","#7572a7","#f7b1bf","#f67e2a","#f57125","#fbaf37","#fde14e","#076c53","#b2d68c","#8fd1cd","#0798c7","#9597ca","#69686d","#f47a25","#fcba5d","#f8d29d","#ffe285","#077e7a","#d0e4a9","#81cdc1","#22b6ed","#b4d6f2","#c077af","#bbbfc2","#fed7a6","#fcae62","#ffe901","#078e82","#d7df3f","#89d3de","#22b6ed","#b295c5","#c5c4c9","#d1d5d8","#f2f1f6","#efe946","#fff455","#ffe901","#4c7020","#c4e0e1","#79bce7","#b7e1fa","#c7a7d2","#e5e4e9","#f2f1f6","#f2f2f6","#1fb27f","#b5a87f","#07b195","#d7df3f","#6dade2","#4dc7ec","#a8b7d8","#b8a1a9","#f8c9cb","#f2f1f6"];
        var result = hexToRgb(color_list[0]);
        // console.log("result "+result);
        function sum(arr) {
            return arr[0]+arr[1]+arr[2];
        };
        for (var i=0;i<color_list.length;i+=1) {
            var c=color_list[i];
            var rgbc=hexToRgb(c);
            // console.log("result_new "+result);
            if (Math.abs(sum(result)-sum(rgbcolor))>Math.abs(sum(rgbc)-sum(rgbcolor))) {
                result=rgbc;
            }
        }
        return rgbToHex(result[0],result[1],result[2]);
    }

    (function () {
        const colorThief = new ColorThief();
        const bg_img = new Image;
        bg_img.crossOrigin = 'Anonymous';
        bg_img.onload = function(){
            var result = colorThief.getColor(bg_img)
            // var bg_color = "#"+result[0].toString(16) + result[1].toString(16) + result[2].toString(16);
            // var ft_color = "rgb("+result[0]*level+","+result[1]*level+","+result[2]*level+")";
            var bg_color = hksubcolor([255-result[0]*level,255-result[1]*level,255-result[2]*level]);
            var level = 1;
            document.documentElement.style.setProperty("--brand-color", "rgb("+result[0]*level+","+result[1]*level+","+result[2]*level+")");
            document.documentElement.style.setProperty("--site-meta-color", bg_color);
            document.documentElement.style.setProperty("--footer-ft-color", "rgb("+result[0]*level+","+result[1]*level+","+result[2]*level+")");
            document.documentElement.style.setProperty("--footer-bg-color", bg_color);
            // console.log(result);
            // console.log(bg_color);
            // console.log(document.documentElement.style.getPropertyValue('--brand-color'));
            // console.log(document.documentElement.style.getPropertyValue('--site-meta-color'));
        }
        bg_img.src = url;
    })();

    // function set_text_color(bg_color) {
    //     if (typeof define === 'function' && define.amd) {
    //         define('color-js' ,[], function() {
    //             return TEXTColor;
    //         });
    //     }
    //     // console.log("背景主题色"+bg_color);
    //     var textcolor = TEXTColor.findTextColor(bg_color);
    //     document.documentElement.style.setProperty("--footer-color", textcolor);
    //     // console.log("footer字体颜色"+textcolor);
    // }

    // (async function() {
    //     var bg_color = await get_bg_color();
    //     set_text_color(bg_color);
    // })();
})();