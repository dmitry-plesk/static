!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="https://assets.plesk.com/static/default-website-content/public/",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),i=t(2),a=t.n(i),s=t(14),l=t.n(s);document.addEventListener("DOMContentLoaded",(function(){document.write(r.a.render(a.a,{public_path:"https://assets.plesk.com/static/default-website-content/public/",domain_page:!0,domain_name:location.hostname,domain_link:location.protocol+"//"+location.hostname,plesk_login:"https://"+location.hostname+("https:"===location.protocol?":8443":""),styles:l.a}))}))},function(n,e,t){n.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var n=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===n.call(e)};function t(n){return"function"==typeof n}function o(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(n,e){return null!=n&&"object"==typeof n&&e in n}var i=RegExp.prototype.test,a=/\S/;function s(n){return!function(n,e){return i.call(n,e)}(a,n)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},p=/\s*/,c=/\s+/,d=/\s*=/,u=/\s*\}/,f=/#|\^|\/|>|\{|&|=|!/;function h(n){this.string=n,this.tail=n,this.pos=0}function g(n,e){this.view=n,this.cache={".":this.view},this.parent=e}function m(){this.cache={}}h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(n){var e=this.tail.match(n);if(!e||0!==e.index)return"";var t=e[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t},h.prototype.scanUntil=function(n){var e,t=this.tail.search(n);switch(t){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=e.length,e},g.prototype.push=function(n){return new g(n,this)},g.prototype.lookup=function(n){var e,o,i,a=this.cache;if(a.hasOwnProperty(n))e=a[n];else{for(var s,l,p,c=this,d=!1;c;){if(n.indexOf(".")>0)for(s=c.view,l=n.split("."),p=0;null!=s&&p<l.length;)p===l.length-1&&(d=r(s,l[p])||(o=s,i=l[p],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(i))),s=s[l[p++]];else s=c.view[n],d=r(c.view,n);if(d){e=s;break}c=c.parent}a[n]=e}return t(e)&&(e=e.call(this.view)),e},m.prototype.clearCache=function(){this.cache={}},m.prototype.parse=function(n,t){var r=this.cache,i=n+":"+(t||b.tags).join(":"),a=r[i];return null==a&&(a=r[i]=function(n,t){if(!n)return[];var r,i,a,l=!1,g=[],m=[],x=[],w=!1,_=!1,v="",k=0;function y(){if(w&&!_)for(;x.length;)delete m[x.pop()];else x=[];w=!1,_=!1}function P(n){if("string"==typeof n&&(n=n.split(c,2)),!e(n)||2!==n.length)throw new Error("Invalid tags: "+n);r=new RegExp(o(n[0])+"\\s*"),i=new RegExp("\\s*"+o(n[1])),a=new RegExp("\\s*"+o("}"+n[1]))}P(t||b.tags);for(var j,z,U,S,L,O,T=new h(n);!T.eos();){if(j=T.pos,U=T.scanUntil(r))for(var C=0,E=U.length;C<E;++C)s(S=U.charAt(C))?(x.push(m.length),v+=S):(_=!0,l=!0,v+=" "),m.push(["text",S,j,j+1]),j+=1,"\n"===S&&(y(),v="",k=0,l=!1);if(!T.scan(r))break;if(w=!0,z=T.scan(f)||"name",T.scan(p),"="===z?(U=T.scanUntil(d),T.scan(d),T.scanUntil(i)):"{"===z?(U=T.scanUntil(a),T.scan(u),T.scanUntil(i),z="&"):U=T.scanUntil(i),!T.scan(i))throw new Error("Unclosed tag at "+T.pos);if(L=">"==z?[z,U,j,T.pos,v,k,l]:[z,U,j,T.pos],k++,m.push(L),"#"===z||"^"===z)g.push(L);else if("/"===z){if(!(O=g.pop()))throw new Error('Unopened section "'+U+'" at '+j);if(O[1]!==U)throw new Error('Unclosed section "'+O[1]+'" at '+j)}else"name"===z||"{"===z||"&"===z?_=!0:"="===z&&P(U)}if(y(),O=g.pop())throw new Error('Unclosed section "'+O[1]+'" at '+T.pos);return function(n){for(var e,t=[],o=t,r=[],i=0,a=n.length;i<a;++i)switch((e=n[i])[0]){case"#":case"^":o.push(e),r.push(e),o=e[4]=[];break;case"/":r.pop()[5]=e[2],o=r.length>0?r[r.length-1][4]:t;break;default:o.push(e)}return t}(function(n){for(var e,t,o=[],r=0,i=n.length;r<i;++r)(e=n[r])&&("text"===e[0]&&t&&"text"===t[0]?(t[1]+=e[1],t[3]=e[3]):(o.push(e),t=e));return o}(m))}(n,t)),a},m.prototype.render=function(n,e,t,o){var r=this.parse(n,o),i=e instanceof g?e:new g(e,void 0);return this.renderTokens(r,i,t,n,o)},m.prototype.renderTokens=function(n,e,t,o,r){for(var i,a,s,l="",p=0,c=n.length;p<c;++p)s=void 0,"#"===(a=(i=n[p])[0])?s=this.renderSection(i,e,t,o):"^"===a?s=this.renderInverted(i,e,t,o):">"===a?s=this.renderPartial(i,e,t,r):"&"===a?s=this.unescapedValue(i,e):"name"===a?s=this.escapedValue(i,e):"text"===a&&(s=this.rawValue(i)),void 0!==s&&(l+=s);return l},m.prototype.renderSection=function(n,o,r,i){var a=this,s="",l=o.lookup(n[1]);if(l){if(e(l))for(var p=0,c=l.length;p<c;++p)s+=this.renderTokens(n[4],o.push(l[p]),r,i);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)s+=this.renderTokens(n[4],o.push(l),r,i);else if(t(l)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(o.view,i.slice(n[3],n[5]),(function(n){return a.render(n,o,r)})))&&(s+=l)}else s+=this.renderTokens(n[4],o,r,i);return s}},m.prototype.renderInverted=function(n,t,o,r){var i=t.lookup(n[1]);if(!i||e(i)&&0===i.length)return this.renderTokens(n[4],t,o,r)},m.prototype.indentPartial=function(n,e,t){for(var o=e.replace(/[^ \t]/g,""),r=n.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!t)&&(r[i]=o+r[i]);return r.join("\n")},m.prototype.renderPartial=function(n,e,o,r){if(o){var i=t(o)?o(n[1]):o[n[1]];if(null!=i){var a=n[6],s=n[5],l=n[4],p=i;return 0==s&&l&&(p=this.indentPartial(i,l,a)),this.renderTokens(this.parse(p,r),e,o,p)}}},m.prototype.unescapedValue=function(n,e){var t=e.lookup(n[1]);if(null!=t)return t},m.prototype.escapedValue=function(n,e){var t=e.lookup(n[1]);if(null!=t)return b.escape(t)},m.prototype.rawValue=function(n){return n[1]};var b={name:"mustache.js",version:"3.2.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},x=new m;return b.clearCache=function(){return x.clearCache()},b.parse=function(n,e){return x.parse(n,e)},b.render=function(n,t,o,r){if("string"!=typeof n)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(i=n)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return x.render(n,t,o,r)},b.to_html=function(n,e,o,r){var i=b.render(n,e,o);if(!t(r))return i;r(i)},b.escape=function(n){return String(n).replace(/[&<>"'`=\/]/g,(function(n){return l[n]}))},b.Scanner=h,b.Context=g,b.Writer=m,b}()},function(n,e,t){n.exports='<!doctype html> <html lang=en> <head> <meta charset=utf-8> {{#domain_page}} <title>Domain Default page</title> {{/domain_page}} {{^domain_page}} <title>Web Server\'s Default Page</title> {{/domain_page}} <meta name=copyright content="Copyright 1999-2020. Plesk International GmbH. All rights reserved."> <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1"> <meta name=viewport content="width=device-width,initial-scale=1"> <link rel="shortcut icon" href='+t(3)+"> <link rel=preload href="+t(4)+" as=font type=font/woff2 crossorigin> <style type=text/css> {{&styles}} </style> </head> <body> <div class=page> <header class=header> <div class=header__inner> <div class=header__content> <a class=header__logo href=https://www.plesk.com target=_blank data-id=logo-link> <img src="+t(5)+' width=98 height=41 alt=Plesk> </a> {{#domain_page}} <h1 class=header__title> This is a default webpage generated for<br> <a href="{{domain_link}}" data-id=domain-link>{{domain_name}}</a> by Plesk. </h1> <div class=header__message> <p>If you are the website owner:</p> <ul> <li>Log in to Plesk to manage the website and its availability.</li> <li>Use File Manager to add the website\'s content.</li> </ul> <p>Unable to manage your website? Contact your service provider.</p> </div> {{/domain_page}} {{^domain_page}} <h1 class=header__title>Web Server\'s Default Page</h1> <p class=header__message> This page is generated by <a href=https://www.plesk.com target=_blank rel="nofollow noopener noreferrer" data-id=server-link>Plesk</a>, the leading hosting automation software.<br> You see this page because there is no Web site at this address. </p> {{/domain_page}} {{#plesk_login}} <div class=note> <div class=note__message> <div>Log in to Plesk to create websites and set up hosting.</div> <a class=note__link href=https://support.plesk.com/hc/en-us/articles/213413369-How-to-log-in-to-Plesk- target=_blank rel="nofollow noopener noreferrer" data-id=howtologin> <img class=note__icon src='+t(6)+' alt=""> New to Plesk? Learn how to log in and start working with it. </a> </div> <a class=note__button href="{{plesk_login}}" data-id=plesk-login>Log in to Plesk</a> </div> {{/plesk_login}} </div> </div> </header> <main class=content> <div class=content__inner> <div class=columns> <div class=columns__column> <h2 class=content__title>What is Plesk</h2> <p><b><a href=https://www.plesk.com target=_blank rel="nofollow noopener noreferrer" data-id=content-plesk-link>Plesk</a></b> is a hosting <a href=https://www.plesk.com/blog/business-industry/whats-control-panel-all-you-need-to-know/ target=_blank rel="nofollow noopener noreferrer" data-id=content-control-panel-link>control panel</a> with simple and secure web server, website and web apps management tools. It is specially designed to help web professionals manage web, DNS, mail and other services through a comprehensive and user-friendly GUI. Plesk is about intelligently managing servers, apps, websites and hosting businesses, on both traditional and cloud hosting.</p> <a class=icon-button href=https://docs.plesk.com/try-plesk-now/ target=_blank rel="nofollow noopener noreferrer" data-id=try-plesk> <img class=icon-button__icon src='+t(7)+' alt="Try Online Demo"> <span>Try Online Demo</span> </a> </div> <div class=columns__column> <ul class=resources-list> <li class=resources-list__item> <a class=plesk-guides href=https://docs.plesk.com/en-US/obsidian/ target=_blank rel="nofollow noopener noreferrer" data-id=plesk-guides> <img class=icon src='+t(8)+' alt="Plesk Guides"> <span>Plesk Guides</span> </a> </li> <li class=resources-list__item> <a href=https://support.plesk.com/hc/en-us target=_blank rel="nofollow noopener noreferrer" data-id=knowledge-base> <img class=icon src='+t(9)+' alt="Knowledge Base"> <span>Knowledge Base</span> </a> </li> <li class=resources-list__item> <a href=https://talk.plesk.com/ target=_blank data-id=forum> <img class=icon src='+t(10)+' alt=Forum> <span>Forum</span> </a> </li> <li class=resources-list__item> <a href=https://www.plesk.com/blog/ target=_blank rel="nofollow noopener noreferrer" data-id=developer-blog> <img class=icon src='+t(11)+' alt="Developer Blog"> <span>Developer Blog</span> </a> </li> <li class=resources-list__item> <a href=https://www.youtube.com/channel/UCeU-_6YHGQFcVSHLbEXLNlA/playlists target=_blank rel="nofollow noopener noreferrer" data-id=video-guides> <img class=icon src='+t(12)+' alt="Video Guides"> <span>Video Guides</span> </a> </li> <li class=resources-list__item> <a href=https://www.facebook.com/Plesk target=_blank rel="nofollow noopener noreferrer" data-id=facebook> <img class=icon src='+t(13)+' alt=Facebook> <span>Facebook</span> </a> </li> </ul> </div> </div> </div> </main> <footer class=footer> <div class=footer__inner> This page was generated by Plesk. Plesk is the leading WebOps platform to run, automate and grow applications, websites and hosting businesses. Learn more at <a href=https://www.plesk.com target=_blank rel="nofollow noopener noreferrer" data-id=footer-plesk-link>plesk.com</a> </div> </footer> <script src="{{public_path}}bundle.js"><\/script> </div> </body> </html> '},function(n,e,t){n.exports=t.p+"favicon-1db747.ico"},function(n,e,t){n.exports=t.p+"fonts/lato-v16-latin-regular-b4d2c4.woff2"},function(n,e,t){n.exports=t.p+"img/logo-775316.svg"},function(n,e,t){n.exports=t.p+"img/question-mark-circle-7c07a2.svg"},function(n,e,t){n.exports=t.p+"img/try-online-demo-6e5f27.svg"},function(n,e,t){n.exports=t.p+"img/plesk-guides-3aaef8.svg"},function(n,e,t){n.exports=t.p+"img/knowlede-base-d84150.svg"},function(n,e,t){n.exports=t.p+"img/forum-4b225c.svg"},function(n,e,t){n.exports=t.p+"img/developers-blog-22dfe6.svg"},function(n,e,t){n.exports=t.p+"img/video-guides-b94afc.svg"},function(n,e,t){n.exports=t.p+"img/facebook-c06b9c.svg"},function(n,e,t){var o=t(15);n.exports="string"==typeof o?o:o.toString()},function(n,e,t){var o=t(16),r=t(17),i=t(4),a=t(18),s=t(19),l=t(20),p=t(21),c=t(22),d=t(23);e=o(!1);var u=r(i),f=r(a),h=r(s),g=r(l),m=r(p),b=r(c),x=r(d);e.push([n.i,"/* Copyright 1999-2020. Plesk International GmbH. All rights reserved. */\n\n@font-face {\n    font-family: \"Lato\";\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url("+u+') format("woff2"),\n    url('+f+") format(\"woff\");\n}\n\n@font-face {\n    font-family: \"Lato\";\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url("+h+') format("woff2"),\n    url('+g+') format("woff");\n}\n\nhtml {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    box-sizing: border-box;\n    height: 100%;\n    font-size: 10px;\n    -webkit-tap-highlight-color: transparent;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n}\n\nbody {\n    display: flex;\n    margin: 0;\n    min-width: 280px;\n    min-height: 100vh;\n    font-size: 14px;\n    line-height: 1.714em;\n    font-family: "Lato", sans-serif;\n    color: #222;\n    word-wrap: break-word;\n    background-color: #f3f3f3;\n}\n\n.page {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\na {\n    color: #03ade4;\n    text-decoration: none;\n    cursor: pointer;\n    background-color: transparent;\n    transition: 0.25s ease-in-out;\n}\n\na:active,\na:hover {\n    outline: none;\n}\n\na:hover {\n    color: #259ccc;\n}\n\np,\nul {\n    margin: 0 0 16px;\n}\n\n.header {\n    background-color: #374758;\n    background-image: url('+m+');\n}\n\n.header__content {\n    max-width: 960px;\n    margin: auto;\n    padding: 20px 20px 30px;\n}\n\n.header__title {\n    margin: 12px 0;\n    font-size: 28px;\n    line-height: 1.286em;\n    color: rgba(255, 255, 255, 0.9);\n}\n\n.header__message {\n    position: relative;\n    z-index: 1;\n    margin: 0 0 30px;\n    font-size: 16px;\n    line-height: 24px;\n    color: rgba(255, 255, 255, 0.9);\n}\n\n.header__message p,\n.header__message ul {\n    margin-bottom: 0;\n}\n\n.note {\n    position: relative;\n    display: flex;\n    align-items: center;\n    padding: 12px;\n    font-size: 16px;\n    line-height: 24px;\n    background-color: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n    border-radius: 4px;\n}\n\n.note:after {\n    content: "";\n    position: absolute;\n    top: -76px;\n    right: 32%;\n    width: 72px;\n    height: 143px;\n    background: url('+b+") no-repeat;\n    background-size: contain;\n}\n\n.note__link {\n    display: inline-flex;\n    align-items: flex-start;\n    margin-top: 4px;\n    font-size: 14px;\n    line-height: 20px;\n}\n\n.note__icon {\n    margin: 2px 4px 0 0;\n    opacity: 0.7;\n}\n\n.note__link:hover .note__icon {\n    opacity: 1;\n}\n\n.note__button {\n    display: inline-block;\n    margin-left: 8px;\n    padding: 8px 12px 10px;\n    border-radius: 4px;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n    color: rgba(255, 255, 255, 0.9);\n    background-color: #53bce6;\n    z-index: 1;\n    white-space: nowrap;\n}\n\n.note__message {\n    flex: 1;\n    z-index: 1;\n}\n\n.note__button:hover {\n    color: rgba(255, 255, 255, 0.9);\n    background-color: #03ade4;\n}\n\n@media (max-width: 769px) {\n    .header__title br {\n        display: none;\n    }\n}\n\n@media (min-width: 768px) {\n    .header__inner {\n        max-width: 1280px;\n        margin: auto;\n        background: url("+x+") 100% 0 no-repeat;\n        background-size: 499px 420px;\n    }\n\n    .header__content {\n        padding: 40px 20px;\n    }\n\n    .header__title {\n        margin: 50px 0 18px;\n    }\n\n    .header__message {\n        line-height: 28px;\n    }\n\n    .note {\n        padding: 18px 24px;\n        font-size: 18px;\n        line-height: 28px;\n    }\n\n    .note__link {\n        display: inline-flex;\n        align-items: flex-start;\n        margin-top: 4px;\n        font-size: 16px;\n        line-height: 24px;\n    }\n\n    .note__icon {\n        margin-top: 4px;\n    }\n\n    .note__button {\n        padding: 8px 30px 12px;\n        font-size: 20px;\n        line-height: 28px;\n    }\n}\n\n.content {\n    display: block;\n    flex: auto;\n}\n\n.content__inner {\n    max-width: 960px;\n    margin: auto;\n    padding: 26px 20px;\n}\n\n.content__title {\n    margin: 0 0 8px;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 28px;\n}\n\n.resources-list {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 16px 0 0;\n    list-style: none;\n    justify-content: space-around;\n}\n\n.resources-list__item {\n    flex: 1 1 33%;\n    min-width: 0;\n    padding: 16px 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\n.resources-list__item > a {\n    position: relative;\n    display: inline-block;\n    text-align: center;\n}\n\n.resources-list__item .icon {\n    display: block;\n    margin: 0 auto 8px;\n    width: 48px;\n    height: 48px;\n    transition: 0.3s;\n}\n\n@media (min-width: 768px) {\n    .columns {\n        display: flex;\n    }\n\n    .columns__column {\n        flex: 1;\n        min-width: 0;\n    }\n\n    .resources-list__item > a {\n        margin-left: 50px;\n    }\n}\n\n.footer {\n    flex: none;\n    font-size: 13px;\n    line-height: 20px;\n    background-color: #374758;\n    color: rgba(255, 255, 255, 0.4);\n}\n\n.footer a {\n    color: rgba(255, 255, 255, 0.4);\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.footer a:hover {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.footer__inner {\n    margin: auto;\n    padding: 20px;\n    max-width: 640px;\n    text-align: center;\n}\n\n.icon-button {\n    display: inline-flex;\n    align-items: center;\n    padding: 13px 20px;\n    line-height: 20px;\n    border: 1px solid #53bce6;\n    border-radius: 4px;\n    background-color: #eef8fc;\n}\n\n.icon-button:hover {\n    background-color: #ddf2fb;\n}\n\n.icon-button__icon {\n    margin: -2px 8px -8px 0;\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var r=[].concat(n[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){n.exports=t.p+"fonts/lato-v16-latin-regular-b8ee54.woff"},function(n,e,t){n.exports=t.p+"fonts/lato-v16-latin-700-1efbd3.woff2"},function(n,e,t){n.exports=t.p+"fonts/lato-v16-latin-700-874b8e.woff"},function(n,e,t){n.exports=t.p+"img/header-bg-1d0da8.svg"},function(n,e,t){n.exports=t.p+"img/guy-508c30.png"},function(n,e,t){n.exports=t.p+"img/header-domain-page-15b75d.png"}]);