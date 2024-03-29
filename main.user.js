// ==UserScript==
// @name            B站弹幕/CC字幕字体自定义
// @namespace    http://tampermonkey.net/
// @version          1.2.0
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
                let danmus = Array.from(document.getElementsByClassName("bili-dm"));
                for(let i in danmus)
                {
                    var danmu = danmus[i]
                    danmu.style?.setProperty('--fontFamily','PingFang SF');
                    danmu.style?.setProperty('--textShadow','rgb(0, 0, 0) 1.5px 0px 1.5px, rgb(0, 0, 0) 0px 1.5px 1.5px, rgb(0, 0, 0) 0px -1.5px 1.5px, rgb(0, 0, 0) -1.5px 0px 1.5px');
                }
            }
            catch(err)
            {
                // alert(err)
                if (level < 3) {
                    setTimeout(function() {
                        changeStyle(className, level+1);
                    }, 100);
                }
            }
        }
        changeStyle('bpx-player-row-dm-wrap');
        changeStyle('bpx-player-row-dm-wrap bili-paused');
        changeStyle('bpx-player-subtitle-panel-text');
        return;
    };
})();
