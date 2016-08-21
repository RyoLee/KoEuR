// ==UserScript==
// @name         Remove useless Elements on KanColle
// @include      http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854*
// @include      http://osapi.dmm.com/gadgets/ifr*
// @namespace    https://github.com/RyoLee/KoEuR
// @homepage     https://github.com/RyoLee/KoEuR
// @updateURL    https://raw.githubusercontent.com/RyoLee/KoEuR/master/KoEuR.js
// @version      1.5
// @description  It's just a demo,now.
// @author       Ryo
// @grant        none
// @run-at document-idle
// ==/UserScript==
(function()
 {
    var host=self.location.host;
    var pathname=self.location.pathname;
    if(host=='www.dmm.com' && (pathname=='/netgame/social/-/gadgets/=/app_id=854854' || pathname=='/netgame/social/-/gadgets/=/app_id=854854/'))
    {
        window.addEventListener('message',function(e){
            console.log(e.data);
            if(e.data=='go')
            {
                window.frames.game_frame.postMessage('go','http://osapi.dmm.com');
                return;
            }
            if(e.data=='done')
            {
                $("body").css({"zoom":"1","margin":"0 0px","min-width":"800px","width":"800px","height":"480px"});
                $('div').remove(".dmm-ntgnavi");
                $("div#w").css({"width":"800px","height":"480px"});
                $("div#main-ntg").css({"margin":"0 0px","padding":"0 0 0px","width":"800px","height":"480px"});
                $("div#page").css({"width":"800px","height":"480px"});
                $("div#area-game").css({"width":"800px","height":"480px"});
                $("iframe#game_frame").attr("height","480");
                $("iframe#game_frame").attr("width","800");
                $("iframe#game_frame").css({"width":"800px","height":"480px","margin-bottom":"-4px"});//
                $("img").remove();
                $('div').remove(".area-pickupgame");
                $('div').remove(".area-naviapp");
                $('div').remove("#foot");
                $('div').remove("#movie_frame");
                $('div').remove("#alert");
                $('div').remove("#block_background");
                $('div').remove("#deqwas-collection");
                return;
            }
            if(typeof e.data != 'object')
            {
                var d;
                try
                {
                    d=JSON.parse(e.data);
                }
                catch (ex){}
                console.log(d);
                if(d.s=="resize_iframe")
                {
                    window.frames.game_frame.postMessage('go','http://osapi.dmm.com');
                    return;
                }
            }
        },false);
        window.onbeforeunload = function(event) {
            return confirm("确定退出吗");
        };
        return;
    }
    if(host=='osapi.dmm.com' && pathname=='/gadgets/ifr')
    {
        window.addEventListener('message',function(e){
            console.log(e.data);
            if(e.data=='go')
            {
                $("body").css({"width":"800px","height":"480px"});
                $("div#spacing_top").remove();
                $("div#adFlashWrap").remove();
                $("div#flashWrap").next("div").remove();
                $("div#wsFlashWrap").remove();
                $("div#sectionWrap").remove();
                $("a").remove();
                window.parent.postMessage('done','http://www.dmm.com');
            }
        },false);
        return;
    }
})();
