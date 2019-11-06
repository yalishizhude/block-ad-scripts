// ==UserScript==
// @name         喜马拉雅
// @version      1.0
// @description  去除搜索广告
// @author       https://yalishizhude.com/
// @include      https://*ximalaya.com/*
// @run-at       document-body
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/ximalaya.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/ximalaya.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// ==/UserScript==

(function() {
  setTimeout(() => {
    document.title = '百度'
    document.querySelector('head').innerHTML += '<link rel="shortcut icon" href="https://www.baidu.com/favicon.ico" type="image/x-icon">'
  }, 3000);
}())