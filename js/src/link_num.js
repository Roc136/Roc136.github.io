var link = {
    init: function() {
        //这里设置的是刚才的 linklist.json 文件路径
        $.getJSON("/links/linklist.json",
        function(data) {
            var num = document.createElement("div");
            num.innerHTML = data.length;
            var links = document.getElementById("links-count")
            links.appendChild(num);
        });
    }
  }
link.init();