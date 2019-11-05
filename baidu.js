// ==UserScript==
// @name         百度去广告
// @version      1.5
// @description  去除搜索广告
// @author       https://yalishizhude.com/
// @include      https://*baidu.com/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/baidu.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/baidu.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// ==/UserScript==

(function() {
  console.info('Remove baidu ad...')
  let addStyle = () => {
    let style = document.createElement('style')
    style.innerHTML = `
      [cmatchid], [data-pos], #content_right, .banner-ad{
      position: absolute;
      z-index: -1;
      top: -9999px;
    }`
    style.addEventListener('DOMNodeRemoved', addStyle)
    document.head.appendChild(style)
  }
  addStyle()
}())