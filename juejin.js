// ==UserScript==
// @name         掘金去广告
// @version      1
// @description  消除页面广告
// @author       亚里士朱德
// @match        https://juejin.im/*
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/juejin.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/juejin.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`.ad-entry-list,.banner-block,.sticky-banner {display:none}`)
    // Your code here...
})();