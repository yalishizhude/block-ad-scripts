// ==UserScript==
// @name         知乎去广告
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  去掉知乎广告以及页面标题
// @author       亚里士朱德
// @include      https://*.zhihu.com/*
// @updateURL    https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/zhihu.js
// @downloadURL  https://raw.githubusercontent.com/yalishizhude/block-ad-scripts/master/zhihu.js
// @supportURL   https://github.com/yalishizhude/block-ad-scripts/issues
// @grant        GM_addStyle
// @run-at       document-start
// @webRequest [{"selector":"https://www.zhihu.com/home_bottom.html","action":"cancel"}]
// @webRequest [{"selector":"https://www.zhihu.com/home_top.html","action":"cancel"}]
// ==/UserScript==

GM_addStyle(`
  .Pc-card.Card,.Pc-word, .TopstoryItem--advertCard,.QuestionHeader-title:first-child,.Card.QuestionInvitation {
    display:none;
  }
  .Search-container [data-za-detail-view-path-module="AnswerItem"]:before,
  .Search-container [data-za-detail-view-path-module="PostItem"]:before {
    color: #fff;
    padding: 1px 3px;
    border-radius: 3px;
    margin: 3px;
    float: right;
    display: none;
  }
  .Search-container [data-za-detail-view-path-module="PostItem"]:hover:before,
  .Search-container [data-za-detail-view-path-module="AnswerItem"]:hover:before {
    display: block;
  }
  .Search-container [data-za-detail-view-path-module="AnswerItem"] {
    box-shadow: 0 0 1px 1px rgba(0, 150, 0, .2);
  }
  .Search-container [data-za-detail-view-path-module="AnswerItem"]:before {
    content: '问答';
    background-color: rgba(0, 150, 0);
  }
  .Search-container [data-za-detail-view-path-module="PostItem"] {
    box-shadow: 0 0 1px 1px rgba(150, 0, 150, .2);
  }
  .Search-container [data-za-detail-view-path-module="PostItem"]:before {
    content: '文章';
    background-color: rgb(150, 0, 150);
  }
`)

let title = 0
const interval = setInterval(() => {
  if (document.title === 'zhihu') title++
  if (title > 3) {
    clearInterval(interval)
    title = 0
  }
  document.title = 'zhihu'
}, 1000)