// ==UserScript==
// @name            B站弹幕字体自定义
// @namespace    http://tampermonkey.net/
// @version          1.1.0
// @description    Customize Danmu in bilibili.com
// @author           WayneFerdon
// @match           https://www.bilibili.com/video/*
// @match           https://www.bilibili.com/bangumi/*
// @match           https://www.bilibili.com/medialist/*
// @match           https://www.bilibili.com/list/*
// @require          http://code.jquery.com/jquery-1.11.0.min.js
// @license          MIT
// @icon              http://www.bilibili.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    
    setInterval(function() {
        setTimeout(function() {
            changeDanmuFont();
        }, 10);
    }, 500);

    function changeDanmuFont() {
        function changeStyle(className, level=0) {
            try
            {
                let danmu = $(document.getElementsByClassName(className)).children('div');
                danmu.css('fontFamily','PingFang SF');
                danmu.css('text-shadow','rgb(0, 0, 0) 1.5px 0px 1.5px, rgb(0, 0, 0) 0px 1.5px 1.5px, rgb(0, 0, 0) 0px -1.5px 1.5px, rgb(0, 0, 0) -1.5px 0px 1.5px');
            }
            catch(err)
            {
                if (level < 3) {
                    setTimeout(function() {
                        changeStyle(className, level+1);
                    }, 100);
                }
            }
        }
        changeStyle('bpx-player-row-dm-wrap');
        changeStyle('bpx-player-row-dm-wrap bili-paused');
        return;
    };
})();
