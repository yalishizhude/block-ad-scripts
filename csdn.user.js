// ==UserScript==
// @name         CSDN去广告
// @version      0
// @description  屏蔽与博客文章无关内容
// @author       亚里士朱德
// @match        https://blog.csdn.net/*
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/csdn.meta.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/csdn.user.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle(`
  .indexSuperise, .mediav_ad, .recommend-box {
    display:none;
  }`);
})();