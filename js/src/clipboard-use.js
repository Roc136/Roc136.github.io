"use strict";window,document,$(".highlight .code pre").before('<button class="btn-copy" data-clipboard-snippet="">  <i class="fa fa-copy" style="color:#eee"></i></button>'),new ClipboardJS(".btn-copy",{target:function(t){return t.nextElementSibling}});