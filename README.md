# KoEuR
Remove useless Elements on KanColle

一期遗产，已无效

JS脚本用于用于移除<<舰队collection>>网页无用元素，需要搭配油猴Tampermonkey使用。
``` JavaScript
javascript:{var iWidth=800;var iHeight=480;var iTop=(window.screen.availHeight-30-iHeight)/2;var iLeft=(window.screen.availWidth-10-iWidth)/2;window.open("http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/","KanColle","height="+iHeight+",width="+iWidth+",top="+iTop+",left="+iLeft+",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");}
```

使用上方JavaScript可以隐藏部分浏览器UI,建议保存为书签，可选中后拖动至收藏夹。

需要注意的是，移除元素是一种"较为暴力"的"适配窗口"方案，哪天懒癌没发病会改成隐藏的:) 大概
