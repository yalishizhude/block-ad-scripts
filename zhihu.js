// ==UserScript==
// @name         知乎去广告
// @namespace    http://tampermonkey.net/
// @version      1
// @description  去掉知乎广告以及页面标题
// @author       亚里士朱德
// @include      https://www.zhihu.com/*
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/zhihu.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/zhihu.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// @grant        GM_addStyle
// @run-at       document-start
// @webRequest [{"selector":"https://www.zhihu.com/home_bottom.html","action":"cancel"}]
// @webRequest [{"selector":"https://www.zhihu.com/home_top.html","action":"cancel"}]
// ==/UserScript==

(function() {
    'use strict';
    console.log(location.href)
    document.title = ''
    GM_addStyle(`
        .Pc-card.Card,.Pc-word, .TopstoryItem--advertCard,.QuestionHeader-title:first-child,.Card.QuestionInvitation {
            display:none;
        }
    `)
})();
