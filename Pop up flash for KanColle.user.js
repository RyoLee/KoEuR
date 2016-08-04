// ==UserScript==
// @name         Remove useless Elements on KanColle
// @include      http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @include      http://osapi.dmm.com/gadgets/ifr*
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  It's just a demo,now.
// @author       Ryo
// @grant        none
// @run-at document-idle
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    var hrefValue = window.location.href;
    if(hrefValue=='http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/')
    {
        window.onload=(function(){
            $("body").css({"margin":"0 0px","min-width":"800px","width":"800px","height":"480px"});
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
            $("img").remove();
            $('iframe[id!="game_frame"]').remove();
            //alert(pathname);
        });
    }
    var host=self.location.host;
    var pathname=self.location.pathname;
    if(host=='osapi.dmm.com' && pathname=='/gadgets/ifr')
    {
        /*
        $(document).ready(function(){
            $("embed#externalswf").attr({"wmode":"Direct","quality":"LOW","play":"false"});
            $("embed#externalswf").attr({"wmode":"Direct","quality":"LOW","play":"false"});
            $("embed#externalswf").attr({"wmode":"GPU","quality":"best"});
            alert("");
            默认模式为Direct质量为hight。尝试修改貌似没有生效，暂时取消，可以使用FRQc插件调整至best
        });*/
        $(window).load(function(){
            var ef = document.getElementById("externalswf");
            if ( !! ef) {
                $("body").css({
                    "width": "800px",
                    "height": "480px"
                });
                $("div#spacing_top").remove();
                $("div#adFlashWrap").remove();
                $("div#flashWrap").next("div").remove();
                $("div#wsFlashWrap").remove();
                $("div#sectionWrap").remove();
                $("a").remove();
            }
            else
            {
                var removeButton=document.createElement("input");
                removeButton.type="button";
                removeButton.value="删除";
                document.getElementById("sectionWrap").parentNode.insertBefore(removeButton,document.getElementById("sectionWrap"));
                $(removeButton).bind("click",function(){
                    $("body").css({"width":"800px","height":"480px"});
                    $("div#spacing_top").remove();
                    $("div#adFlashWrap").remove();
                    $("div#flashWrap").next("div").remove();
                    $("div#wsFlashWrap").remove();
                    $("div#sectionWrap").remove();
                    $("a").remove();
                    $("input#removeButton").remove();
                });
            }
        });
    }
})();
