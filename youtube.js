// ==UserScript==
// @name         youtube去广告
// @version      1
// @description  自动点击“跳过广告”
// @author       亚里士朱德
// @include      https://www.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/youtube.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/youtube.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`.ytp-ad-overlay-slot{
        display:none;
    }`)
    const skip = () => {
      let dom = document.querySelector('.ytp-ad-skip-button-container')
      try {
        dom.click()
      } catch(e) {
        setTimeout(skip, 100)
      }
    }
    const listen = () => {
      let dom = document.querySelector('.video-ads.ytp-ad-module')
      if(dom) {
        dom.addEventListener("DOMNodeInserted", skip)
      } else {
        setTimeout(listen, 1000)
      }
    }
    listen()
})();