link = {
    init: function() {
        var that = this;
        //这里设置的是刚才的 linklist.json 文件路径
        $.getJSON("/links/linklist.json",
        function(data) {
            that.render(data);
            // var num = document.createElement("div");
            // num.innerHTML = data.length;
            // var links = document.getElementById("links-count")
            // links.appendChild(num);
        });
    },
    render: function(data) {
        var html, nickname, avatar, site, li = "";
        if (data.length == 0) {
            li = "<p>暂无内容</p>"
        }
        else {
            for (var i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                description = data[i].description;
                li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a href="' + site + '" target="_blank">' + nickname + '</a>' + '<p style="text-align: left;text-indent: 2em;height: 100px;overflow: hidden"">' + description + '</p>' + '</div>' + '</div>' + '</div>';
            }
        }
        $(".link-navigation").append(li);
    }
  }
  link.init();