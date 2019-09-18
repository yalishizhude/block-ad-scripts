// ==UserScript==
// @name         京东首页优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description  去除京东首页各种无关的商品 
// @author       https://yalishizhude.com/
// @match        https://www.jd.com/
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/jd.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/jd.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle(`
    #J_promotional-top, #app {
      display: none;
    }
  `)
})();