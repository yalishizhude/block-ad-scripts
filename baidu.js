// ==UserScript==
// @name         百度去广告
// @version      1.1
// @description  去除搜索广告
// @author       https://yalishizhude.com/
// @include      https://*baidu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/baidu.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/baidu.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// ==/UserScript==

(function() {
  GM_addStyle(`
    [cmatchid]{
        position: absolute;
        z-index: -1;
        top: -9999px;
    }
  `)
}())