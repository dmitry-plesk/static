(()=>{"use strict";var n=[,(n,r,e)=>{e.r(r),e.d(r,{default:()=>k});
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var t=Object.prototype.toString,o=Array.isArray||function(n){return"[object Array]"===t.call(n)};function a(n){return"function"==typeof n}function i(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(n,r){return null!=n&&"object"==typeof n&&r in n}var l=RegExp.prototype.test;var p=/\S/;function c(n){return!function(n,r){return l.call(n,r)}(p,n)}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var h=/\s*/,g=/\s+/,u=/\s*=/,f=/\s*\}/,m=/#|\^|\/|>|\{|&|=|!/;function b(n){this.string=n,this.tail=n,this.pos=0}function w(n,r){this.view=n,this.cache={".":this.view},this.parent=r}function x(){this.templateCache={_cache:{},set:function(n,r){this._cache[n]=r},get:function(n){return this._cache[n]},clear:function(){this._cache={}}}}b.prototype.eos=function(){return""===this.tail},b.prototype.scan=function(n){var r=this.tail.match(n);if(!r||0!==r.index)return"";var e=r[0];return this.tail=this.tail.substring(e.length),this.pos+=e.length,e},b.prototype.scanUntil=function(n){var r,e=this.tail.search(n);switch(e){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,e),this.tail=this.tail.substring(e)}return this.pos+=r.length,r},w.prototype.push=function(n){return new w(n,this)},w.prototype.lookup=function(n){var r,e,t,o=this.cache;if(o.hasOwnProperty(n))r=o[n];else{for(var i,l,p,c=this,d=!1;c;){if(n.indexOf(".")>0)for(i=c.view,l=n.split("."),p=0;null!=i&&p<l.length;)p===l.length-1&&(d=s(i,l[p])||(e=i,t=l[p],null!=e&&"object"!=typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t))),i=i[l[p++]];else i=c.view[n],d=s(c.view,n);if(d){r=i;break}c=c.parent}o[n]=r}return a(r)&&(r=r.call(this.view)),r},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(n,r){var e=this.templateCache,t=n+":"+(r||v.tags).join(":"),a=void 0!==e,s=a?e.get(t):void 0;return null==s&&(s=function(n,r){if(!n)return[];var e,t,a,s=!1,l=[],p=[],d=[],w=!1,x=!1,_="",k=0;function y(){if(w&&!x)for(;d.length;)delete p[d.pop()];else d=[];w=!1,x=!1}function U(n){if("string"==typeof n&&(n=n.split(g,2)),!o(n)||2!==n.length)throw new Error("Invalid tags: "+n);e=new RegExp(i(n[0])+"\\s*"),t=new RegExp("\\s*"+i(n[1])),a=new RegExp("\\s*"+i("}"+n[1]))}U(r||v.tags);for(var L,P,C,R,z,S,T=new b(n);!T.eos();){if(L=T.pos,C=T.scanUntil(e))for(var j=0,E=C.length;j<E;++j)c(R=C.charAt(j))?(d.push(p.length),_+=R):(x=!0,s=!0,_+=" "),p.push(["text",R,L,L+1]),L+=1,"\n"===R&&(y(),_="",k=0,s=!1);if(!T.scan(e))break;if(w=!0,P=T.scan(m)||"name",T.scan(h),"="===P?(C=T.scanUntil(u),T.scan(u),T.scanUntil(t)):"{"===P?(C=T.scanUntil(a),T.scan(f),T.scanUntil(t),P="&"):C=T.scanUntil(t),!T.scan(t))throw new Error("Unclosed tag at "+T.pos);if(z=">"==P?[P,C,L,T.pos,_,k,s]:[P,C,L,T.pos],k++,p.push(z),"#"===P||"^"===P)l.push(z);else if("/"===P){if(!(S=l.pop()))throw new Error('Unopened section "'+C+'" at '+L);if(S[1]!==C)throw new Error('Unclosed section "'+S[1]+'" at '+L)}else"name"===P||"{"===P||"&"===P?x=!0:"="===P&&U(C)}if(y(),S=l.pop())throw new Error('Unclosed section "'+S[1]+'" at '+T.pos);return function(n){for(var r,e=[],t=e,o=[],a=0,i=n.length;a<i;++a)switch((r=n[a])[0]){case"#":case"^":t.push(r),o.push(r),t=r[4]=[];break;case"/":o.pop()[5]=r[2],t=o.length>0?o[o.length-1][4]:e;break;default:t.push(r)}return e}(function(n){for(var r,e,t=[],o=0,a=n.length;o<a;++o)(r=n[o])&&("text"===r[0]&&e&&"text"===e[0]?(e[1]+=r[1],e[3]=r[3]):(t.push(r),e=r));return t}(p))}(n,r),a&&e.set(t,s)),s},x.prototype.render=function(n,r,e,t){var o=this.getConfigTags(t),a=this.parse(n,o),i=r instanceof w?r:new w(r,void 0);return this.renderTokens(a,i,e,n,t)},x.prototype.renderTokens=function(n,r,e,t,o){for(var a,i,s,l="",p=0,c=n.length;p<c;++p)s=void 0,"#"===(i=(a=n[p])[0])?s=this.renderSection(a,r,e,t,o):"^"===i?s=this.renderInverted(a,r,e,t,o):">"===i?s=this.renderPartial(a,r,e,o):"&"===i?s=this.unescapedValue(a,r):"name"===i?s=this.escapedValue(a,r,o):"text"===i&&(s=this.rawValue(a)),void 0!==s&&(l+=s);return l},x.prototype.renderSection=function(n,r,e,t,i){var s=this,l="",p=r.lookup(n[1]);if(p){if(o(p))for(var c=0,d=p.length;c<d;++c)l+=this.renderTokens(n[4],r.push(p[c]),e,t,i);else if("object"==typeof p||"string"==typeof p||"number"==typeof p)l+=this.renderTokens(n[4],r.push(p),e,t,i);else if(a(p)){if("string"!=typeof t)throw new Error("Cannot use higher-order sections without the original template");null!=(p=p.call(r.view,t.slice(n[3],n[5]),(function(n){return s.render(n,r,e,i)})))&&(l+=p)}else l+=this.renderTokens(n[4],r,e,t,i);return l}},x.prototype.renderInverted=function(n,r,e,t,a){var i=r.lookup(n[1]);if(!i||o(i)&&0===i.length)return this.renderTokens(n[4],r,e,t,a)},x.prototype.indentPartial=function(n,r,e){for(var t=r.replace(/[^ \t]/g,""),o=n.split("\n"),a=0;a<o.length;a++)o[a].length&&(a>0||!e)&&(o[a]=t+o[a]);return o.join("\n")},x.prototype.renderPartial=function(n,r,e,t){if(e){var o=this.getConfigTags(t),i=a(e)?e(n[1]):e[n[1]];if(null!=i){var s=n[6],l=n[5],p=n[4],c=i;0==l&&p&&(c=this.indentPartial(i,p,s));var d=this.parse(c,o);return this.renderTokens(d,r,e,c,t)}}},x.prototype.unescapedValue=function(n,r){var e=r.lookup(n[1]);if(null!=e)return e},x.prototype.escapedValue=function(n,r,e){var t=this.getConfigEscape(e)||v.escape,o=r.lookup(n[1]);if(null!=o)return"number"==typeof o&&t===v.escape?String(o):t(o)},x.prototype.rawValue=function(n){return n[1]},x.prototype.getConfigTags=function(n){return o(n)?n:n&&"object"==typeof n?n.tags:void 0},x.prototype.getConfigEscape=function(n){return n&&"object"==typeof n&&!o(n)?n.escape:void 0};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){_.templateCache=n},get templateCache(){return _.templateCache}},_=new x;v.clearCache=function(){return _.clearCache()},v.parse=function(n,r){return _.parse(n,r)},v.render=function(n,r,e,t){if("string"!=typeof n)throw new TypeError('Invalid template! Template should be a "string" but "'+((o(a=n)?"array":typeof a)+'" was given as the first argument for mustache#render(template, view, partials)'));var a;return _.render(n,r,e,t)},v.escape=function(n){return String(n).replace(/[&<>"'`=\/]/g,(function(n){return d[n]}))},v.Scanner=b,v.Context=w,v.Writer=x;const k=v},(n,r,e)=>{e.r(r),e.d(r,{default:()=>m});var t=e(3),o=e.n(t),a=new URL(e(4),e.b),i=new URL(e(5),e.b),s=new URL(e(6),e.b),l=new URL(e(7),e.b),p=new URL(e(8),e.b),c=new URL(e(9),e.b),d=new URL(e(10),e.b),h=new URL(e(11),e.b),g=new URL(e(12),e.b),u=new URL(e(13),e.b),f=new URL(e(14),e.b);const m='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="utf-8">\r\n{{#domain_page}}\r\n    <title>Domain Default page</title>\r\n{{/domain_page}}\r\n{{^domain_page}}\r\n    <title>Web Server\'s Default Page</title>\r\n{{/domain_page}}\r\n    <meta name="copyright" content="Copyright 1999-2023. Plesk International GmbH. All rights reserved.">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1">\r\n    <link rel="shortcut icon" href="'+o()(a)+'">\r\n    <link rel="preload" href="'+o()(i)+'" as="font" type="font/woff2" crossorigin>\r\n    <style type="text/css">\r\n        {{&styles}}\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="page">\r\n    <header class="header">\r\n        <div class="header__inner">\r\n            <div class="header__content">\r\n                <a class="header__logo" href="https://www.plesk.com" target="_blank" data-id="logo-link">\r\n                    <img src="'+o()(s)+'" width="98" height="41" alt="Plesk">\r\n                </a>\r\n{{#domain_page}}\r\n                <h1 class="header__title">\r\n                    This is a default webpage generated for<br>\r\n                    <a href="{{domain_link}}" data-id="domain-link">{{domain_name}}</a>\r\n                    by Plesk.\r\n                </h1>\r\n                <div class="header__message">\r\n                    <p>If you are the website owner:</p>\r\n                    <ul>\r\n                        <li>Log in to Plesk to manage the website and its availability.</li>\r\n                        <li>Use File Manager to add the website\'s content.</li>\r\n                    </ul>\r\n                    <p>Unable to manage your website? Contact your service provider.</p>\r\n                </div>\r\n{{/domain_page}}\r\n{{^domain_page}}\r\n                <h1 class="header__title">Web Server\'s Default Page</h1>\r\n                <p class="header__message">\r\n                    This page is generated by <a href="https://www.plesk.com" target="_blank" rel="nofollow noopener noreferrer" data-id="server-link">Plesk</a>,\r\n                    the leading hosting automation software.<br>\r\n                    You see this page because there is no Web site at this address.\r\n                </p>\r\n{{/domain_page}}\r\n{{#plesk_login}}\r\n                <div class="note">\r\n                    <div class="note__message">\r\n                        <div>Log in to Plesk to create websites and set up hosting.</div>\r\n                        <a class="note__link" href="https://support.plesk.com/hc/en-us/articles/213413369-How-to-log-in-to-Plesk-" target="_blank" rel="nofollow noopener noreferrer" data-id="howtologin">\r\n                            <img class="note__icon" src="'+o()(l)+'" alt="">\r\n                            New to Plesk? Learn how to log in and start working with it.\r\n                        </a>\r\n                    </div>\r\n                    <a class="note__button" href="{{plesk_login}}" data-id="plesk-login">Log in to Plesk</a>\r\n                </div>\r\n{{/plesk_login}}\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <main class="content">\r\n        <div class="content__inner">\r\n            <div class="columns">\r\n                <div class="columns__column">\r\n                    <h2 class="content__title">What is Plesk</h2>\r\n                    <p><b><a href="https://www.plesk.com" target="_blank" rel="nofollow noopener noreferrer" data-id="content-plesk-link">Plesk</a></b> is a hosting\r\n                        <a href="https://www.plesk.com/blog/business-industry/whats-control-panel-all-you-need-to-know/" target="_blank" rel="nofollow noopener noreferrer" data-id="content-control-panel-link">control panel</a>\r\n                        with simple and secure web server, website and web apps management tools. It is specially designed to help web professionals manage web,\r\n                        DNS, mail and other services through a comprehensive and user-friendly GUI. Plesk is about intelligently managing servers, apps,\r\n                        websites and hosting businesses, on both traditional and cloud hosting.</p>\r\n                    <a class="icon-button" href="https://docs.plesk.com/try-plesk-now/" target="_blank" rel="nofollow noopener noreferrer" data-id="try-plesk">\r\n                        <img class="icon-button__icon" src="'+o()(p)+'" alt="Try Online Demo">\r\n                        <span>Try Online Demo</span>\r\n                    </a>\r\n                </div>\r\n                <div class="columns__column">\r\n                    <ul class="resources-list">\r\n                        <li class="resources-list__item">\r\n                            <a class="plesk-guides" href="https://docs.plesk.com/en-US/obsidian/" target="_blank" rel="nofollow noopener noreferrer" data-id="plesk-guides">\r\n                                <img class="icon" src="'+o()(c)+'" alt="Plesk Guides">\r\n                                <span>Plesk Guides</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class="resources-list__item">\r\n                            <a href="https://support.plesk.com/hc/en-us" target="_blank" rel="nofollow noopener noreferrer" data-id="knowledge-base">\r\n                                <img class="icon" src="'+o()(d)+'" alt="Knowledge Base">\r\n                                <span>Knowledge Base</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class="resources-list__item">\r\n                            <a href="https://talk.plesk.com/" target="_blank" data-id="forum">\r\n                                <img class="icon" src="'+o()(h)+'" alt="Forum">\r\n                                <span>Forum</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class="resources-list__item">\r\n                            <a href="https://www.plesk.com/blog/" target="_blank" rel="nofollow noopener noreferrer" data-id="developer-blog">\r\n                                <img class="icon" src="'+o()(g)+'" alt="Developer Blog">\r\n                                <span>Developer Blog</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class="resources-list__item">\r\n                            <a href="https://www.youtube.com/channel/UCeU-_6YHGQFcVSHLbEXLNlA/playlists" target="_blank" rel="nofollow noopener noreferrer" data-id="video-guides">\r\n                                <img class="icon" src="'+o()(u)+'" alt="Video Guides">\r\n                                <span>Video Guides</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class="resources-list__item">\r\n                            <a href="https://www.facebook.com/Plesk" target="_blank" rel="nofollow noopener noreferrer" data-id="facebook">\r\n                                <img class="icon" src="'+o()(f)+'" alt="Facebook">\r\n                                <span>Facebook</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n    <footer class="footer">\r\n        <div class="footer__inner">\r\n            This page was generated by Plesk. Plesk is the leading WebOps platform to run, automate and grow applications, websites and hosting businesses.\r\n            Learn more at <a href="https://www.plesk.com" target="_blank" rel="nofollow noopener noreferrer" data-id="footer-plesk-link">plesk.com</a>\r\n        </div>\r\n    </footer>\r\n    <script src="{{public_path}}bundle.js"><\/script>\r\n    </div>\r\n</body>\r\n</html>\r\n'},n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),r.hash&&(n+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},(n,r,e)=>{n.exports=e.p+"favicon-2d0e10.ico"},(n,r,e)=>{n.exports=e.p+"fonts/lato-v16-latin-regular-65e877.woff2"},(n,r,e)=>{n.exports=e.p+"img/logo-ebb972.svg"},(n,r,e)=>{n.exports=e.p+"img/question-mark-circle-2b854e.svg"},(n,r,e)=>{n.exports=e.p+"img/try-online-demo-e76f32.svg"},(n,r,e)=>{n.exports=e.p+"img/plesk-guides-466bdb.svg"},(n,r,e)=>{n.exports=e.p+"img/knowlede-base-e4cf57.svg"},(n,r,e)=>{n.exports=e.p+"img/forum-a9076c.svg"},(n,r,e)=>{n.exports=e.p+"img/developers-blog-1dd547.svg"},(n,r,e)=>{n.exports=e.p+"img/video-guides-0ca174.svg"},(n,r,e)=>{n.exports=e.p+"img/facebook-2e0b41.svg"},(n,r,e)=>{e.r(r),e.d(r,{default:()=>U});var t=e(16),o=e.n(t),a=e(17),i=e.n(a),s=e(18),l=e.n(s),p=new URL(e(5),e.b),c=new URL(e(19),e.b),d=new URL(e(20),e.b),h=new URL(e(21),e.b),g=new URL(e(22),e.b),u=new URL(e(23),e.b),f=new URL(e(24),e.b),m=i()(o()),b=l()(p),w=l()(c),x=l()(d),v=l()(h),_=l()(g),k=l()(u),y=l()(f);m.push([n.id,"/* Copyright 1999-2023. Plesk International GmbH. All rights reserved. */\r\n\r\n@font-face {\r\n    font-family: \"Lato\";\r\n    font-display: swap;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Lato Regular'), local('Lato-Regular'), url("+b+') format("woff2"),\r\n    url('+w+") format(\"woff\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Lato\";\r\n    font-display: swap;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Lato Bold'), local('Lato-Bold'), url("+x+') format("woff2"),\r\n    url('+v+') format("woff");\r\n}\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    font-size: 10px;\r\n    -webkit-tap-highlight-color: transparent;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    margin: 0;\r\n    min-width: 280px;\r\n    min-height: 100vh;\r\n    font-size: 14px;\r\n    line-height: 1.714em;\r\n    font-family: "Lato", sans-serif;\r\n    color: #222;\r\n    word-wrap: break-word;\r\n    background-color: #f3f3f3;\r\n}\r\n\r\n.page {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\na {\r\n    color: #03ade4;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    transition: 0.25s ease-in-out;\r\n}\r\n\r\na:active,\r\na:hover {\r\n    outline: none;\r\n}\r\n\r\na:hover {\r\n    color: #259ccc;\r\n}\r\n\r\np,\r\nul {\r\n    margin: 0 0 16px;\r\n}\r\n\r\n.header {\r\n    background-color: #374758;\r\n    background-image: url('+_+');\r\n}\r\n\r\n.header__content {\r\n    max-width: 960px;\r\n    margin: auto;\r\n    padding: 20px 20px 30px;\r\n}\r\n\r\n.header__title {\r\n    margin: 12px 0;\r\n    font-size: 28px;\r\n    line-height: 1.286em;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.header__message {\r\n    position: relative;\r\n    z-index: 1;\r\n    margin: 0 0 30px;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.header__message p,\r\n.header__message ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.note {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 12px;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\r\n    border-radius: 4px;\r\n}\r\n\r\n.note:after {\r\n    content: "";\r\n    position: absolute;\r\n    top: -76px;\r\n    right: 32%;\r\n    width: 72px;\r\n    height: 143px;\r\n    background: url('+k+") no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.note__link {\r\n    display: inline-flex;\r\n    align-items: flex-start;\r\n    margin-top: 4px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n}\r\n\r\n.note__icon {\r\n    margin: 2px 4px 0 0;\r\n    opacity: 0.7;\r\n}\r\n\r\n.note__link:hover .note__icon {\r\n    opacity: 1;\r\n}\r\n\r\n.note__button {\r\n    display: inline-block;\r\n    margin-left: 8px;\r\n    padding: 8px 12px 10px;\r\n    border-radius: 4px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    background-color: #53bce6;\r\n    z-index: 1;\r\n    white-space: nowrap;\r\n}\r\n\r\n.note__message {\r\n    flex: 1;\r\n    z-index: 1;\r\n}\r\n\r\n.note__button:hover {\r\n    color: rgba(255, 255, 255, 0.9);\r\n    background-color: #03ade4;\r\n}\r\n\r\n@media (max-width: 769px) {\r\n    .header__title br {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .header__inner {\r\n        max-width: 1280px;\r\n        margin: auto;\r\n        background: url("+y+") 100% 0 no-repeat;\r\n        background-size: 499px 420px;\r\n    }\r\n\r\n    .header__content {\r\n        padding: 40px 20px;\r\n    }\r\n\r\n    .header__title {\r\n        margin: 50px 0 18px;\r\n    }\r\n\r\n    .header__message {\r\n        line-height: 28px;\r\n    }\r\n\r\n    .note {\r\n        padding: 18px 24px;\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .note__link {\r\n        display: inline-flex;\r\n        align-items: flex-start;\r\n        margin-top: 4px;\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .note__icon {\r\n        margin-top: 4px;\r\n    }\r\n\r\n    .note__button {\r\n        padding: 8px 30px 12px;\r\n        font-size: 20px;\r\n        line-height: 28px;\r\n    }\r\n}\r\n\r\n.content {\r\n    display: block;\r\n    flex: auto;\r\n}\r\n\r\n.content__inner {\r\n    max-width: 960px;\r\n    margin: auto;\r\n    padding: 26px 20px;\r\n}\r\n\r\n.content__title {\r\n    margin: 0 0 8px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n}\r\n\r\n.resources-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 16px 0 0;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n}\r\n\r\n.resources-list__item {\r\n    flex: 1 1 33%;\r\n    min-width: 0;\r\n    padding: 16px 0;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n\r\n.resources-list__item > a {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.resources-list__item .icon {\r\n    display: block;\r\n    margin: 0 auto 8px;\r\n    width: 48px;\r\n    height: 48px;\r\n    transition: 0.3s;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .columns {\r\n        display: flex;\r\n    }\r\n\r\n    .columns__column {\r\n        flex: 1;\r\n        min-width: 0;\r\n    }\r\n\r\n    .resources-list__item > a {\r\n        margin-left: 50px;\r\n    }\r\n}\r\n\r\n.footer {\r\n    flex: none;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n    background-color: #374758;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.footer a {\r\n    color: rgba(255, 255, 255, 0.4);\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.footer a:hover {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.footer__inner {\r\n    margin: auto;\r\n    padding: 20px;\r\n    max-width: 640px;\r\n    text-align: center;\r\n}\r\n\r\n.icon-button {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 13px 20px;\r\n    line-height: 20px;\r\n    border: 1px solid #53bce6;\r\n    border-radius: 4px;\r\n    background-color: #eef8fc;\r\n}\r\n\r\n.icon-button:hover {\r\n    background-color: #ddf2fb;\r\n}\r\n\r\n.icon-button__icon {\r\n    margin: -2px 8px -8px 0;\r\n}\r\n",""]);const U=m},n=>{n.exports=function(n){return n[1]}},n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);t&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},(n,r,e)=>{n.exports=e.p+"fonts/lato-v16-latin-regular-319df0.woff"},(n,r,e)=>{n.exports=e.p+"fonts/lato-v16-latin-700-f1405b.woff2"},(n,r,e)=>{n.exports=e.p+"fonts/lato-v16-latin-700-a354bb.woff"},(n,r,e)=>{n.exports=e.p+"img/header-bg-6827b7.svg"},(n,r,e)=>{n.exports=e.p+"img/guy-cc224f.png"},(n,r,e)=>{n.exports=e.p+"img/header-domain-page-98961e.png"}],r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.p="https://assets.plesk.com/static/default-website-content/public/",e.b=document.baseURI||self.location.href;var t={};(()=>{e.r(t);var n=e(1),r=e(2),o=e(15);document.addEventListener("DOMContentLoaded",(function(){document.write(n.default.render(r.default,{public_path:"https://assets.plesk.com/static/default-website-content/public/",domain_page:!1,domain_name:location.hostname,domain_link:location.protocol+"//"+location.hostname,plesk_login:"https://"+location.hostname+("https:"===location.protocol?":8443":""),styles:o.default}))}))})()})();