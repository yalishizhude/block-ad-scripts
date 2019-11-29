// ==UserScript==
// @name         掘金去广告
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://juejin.im/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle(`
.ad-entry-list,
.banner-block,
.sticky-banner,
.activity-recommend,
.recommended-area,
.article-banner,
.footer-author-block,
.tag-list-box,
.recommend-index,
.author-block,
.app-download-sidebar-block,
.wechat-sidebar-block,
.related-entry-sidebar-block{
  display:none
}
.sticky-block-box{
  position: fixed;
  top: 6.766999999999999rem;
}
`)
})();