// ==UserScript==
// @name         B站自动关闭弹幕
// @version      0.2
// @description  默认关闭弹幕
// @author       https://yalishizhude.com/
// @include      https://www.bilibili.com/video/*
// @grant        none
// @updateURL    https://github.com/yalishizhude/bilibili.js
// @downloadURL  https://github.com/yalishizhude/bilibili.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// ==/UserScript==

(function () {
  'use strict';
  const $ = (sel) => document.querySelector(sel)
  const remove = () => {
    if ($('.bilibili-player-video-danmaku-switch.bui.bui-switch')) {
      const mouseover = document.createEvent("MouseEvents");
      mouseover.initMouseEvent("mouseover")
      $('.bilibili-player-video-danmaku-switch.bui.bui-switch').dispatchEvent(mouseover)
    }
    if ($('.choose_danmaku') && $('.choose_danmaku').textContent !== '开启弹幕') {
      const danmu = $('.bui-checkbox')
      danmu && danmu.click()
      document.body.removeEventListener('DOMSubtreeModified', remove);
    }
  }
  document.body.addEventListener('DOMSubtreeModified', remove);
  remove()
})();