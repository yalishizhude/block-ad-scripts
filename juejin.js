// ==UserScript==
// @name         掘金去广告
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://juejin.im/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`.ad-entry-list,.banner-block,.sticky-banner,.activity-recommend {display:none}`)
    // Your code here...
})();