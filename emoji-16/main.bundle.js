(()=>{"use strict";var e,t={9338:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,':root {\n    --theme-accent: #ff8c00;\n    --theme-highlight: #dddddd;\n    --theme-shadow: #000000aa; /* this is NOT REAL (yet) i just need to force stinky bad github pages to build */\n}\n\nbody {\n    font-family: "Manrope", sans-serif;\n\n    margin: 0;\n    scroll-behavior: smooth !important;\n}\n\nmain#root {\n    margin-left: 280pt;\n\n    height: 100%;\n    width: calc(100vw - 280pt);\n}',""]);const l=i},5124:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,'div.copy-box {\n    filter: drop-shadow(0 0 4pt #00000044)\n}\n\ndiv.copy-box input[type="text"] {\n    appearance: none;\n    border: 1px gray solid;\n    border-right: none;\n    font-size: 0.9rem;\n\n    height: 24pt;\n    width: 140pt;\n    \n    font-family: "Manrope", sans-serif;\n    border-radius: 0.5rem 0 0 0.5rem;\n    padding-left: 0.5rem;\n}\n\ndiv.copy-box button {\n    appearance: none;\n    cursor: pointer;\n    border: none;\n    height: calc(26pt + 1px);\n    width: 54pt;\n\n    font-size: 0.9rem;\n    font-weight: bold;\n    font-family: "Manrope", sans-serif;\n\n    background-color: var(--theme-accent);\n    color: white;\n    border-radius: 0 0.5rem 0.5rem 0;\n\n    transition: box-shadow 0.2s;\n    box-shadow: inset 0 0 8pt #ffffff00;\n}\n\ndiv.copy-box button:hover {\n    box-shadow: inset 0 0 16pt #ffffff99;\n}\n\ndiv.copy-box button:active {\n    box-shadow: inset 0 0 4pt #00000088;\n}',""]);const l=i},4767:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,'div#emoji-copy-options {\n    margin-bottom: 0.5rem;\n    width: 100%;\n    \n    display: flex;\n    justify-content: space-between;\n}\n\ndiv#emoji-copy-options > div {\n    display: inline-block;\n\n    overflow: hidden;\n    position: relative;\n    height: 32pt;\n    box-shadow: inset 0 0 8pt #00000022;\n    border-radius: 0.5rem;\n}\n\ndiv#emoji-copy-host {\n    width: calc(32pt * 2);\n}\n\ndiv#emoji-copy-format {\n    width: calc(32pt * 4);\n}\n\ndiv#emoji-copy-options > div::before {\n    position: absolute;\n    background-color: var(--theme-accent);\n    height: 32pt;\n    width: 32pt;\n\n    left: 0;\n    content: "";\n    color: transparent;\n\n    transition: left 0.3s ease-out;\n}\n\ndiv#emoji-copy-options div[data-selected="1"]::before {\n    left: calc(32pt * 1);\n}\n\ndiv#emoji-copy-options div[data-selected="2"]::before {\n    left: calc(32pt * 2);\n}\n\ndiv#emoji-copy-options div[data-selected="3"]::before {\n    left: calc(32pt * 3);\n}\n\ndiv#emoji-copy-options div button {\n    position: relative;\n    z-index: 3;\n    appearance: none;\n    cursor: pointer;\n    border: none;\n    height: 32pt;\n    width: 32pt;\n\n    font-size: 0.9rem;\n    font-weight: bold;\n    font-family: "Manrope", sans-serif;\n\n    background-color: transparent;\n    margin: 0;\n    color: white;\n}\n\nbutton.slider-button:focus-visible {\n    background-color: #008cff88 !important;\n}\n\nbutton.slider-button div.slider-button-icon {\n    width: 100%;\n    height: 100%;\n\n    mask-repeat: no-repeat;\n    mask-position: center;\n    mask-size: 26px 26px;\n\n    background-color: black;\n    transition: background-color 0.3s;\n}\n\nbutton.slider-button[data-selected="true"] div.slider-button-icon {\n    background-color: white;\n}',""]);const l=i},8692:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,'div#emoji-info {\n    position: relative;\n    text-align: center;\n\n    box-sizing: border-box;\n    padding-top: 8pt;\n    padding-bottom: 32pt;\n    padding-inline: 16pt;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-content: center;\n    align-items: center;\n\n    gap: 1em;\n\n    overflow-y: scroll;\n\n    max-height: calc(100vh - 64pt);\n}\n\nfigcaption.emoji-name {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\nimg.emoji-image {\n    margin-top: 0.8em;\n    width: 225px;\n    height: 225px;\n    display: inline-block;\n}\n\ndiv#emoji-preview {\n    display: flex;\n    gap: 10px;\n}\n\nimg.emoji-image-small {\n    width: 15px;\n    height: 15px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\nimg.emoji-image-small + img.emoji-image-small {\n    background-color: black;\n}\n\ndiv#emoji-info[data-contributed="true"] img.emoji-image {\n    image-rendering: pixelated;\n    image-rendering: optimizeSpeed;\n}\n\ndiv#emoji-info[data-contributed="false"] div.emoji-contributed strong {\n    color: gray;\n}',""]);const l=i},5939:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,"div#header {\n    position: relative;\n    height: 64pt;\n\n    color: white;\n    background-color: var(--theme-accent);\n\n    font-size: xx-large;\n    font-weight: bolder;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n\n    border-bottom-right-radius: 16pt;\n\n    z-index: 8;\n}",""]);const l=i},7080:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,'div#list {\n    padding-top: 48pt;\n}\n\ndiv.emoji-icons {\n    padding: 16pt;\n    padding-top: 8pt;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 14pt;\n}\n\nbutton.list-item {\n    border: none;\n    background-color: transparent;\n    border-radius: 2pt;\n    transition: background-color 0.1s;\n    padding-inline: 3pt;\n}\n\nbutton.list-item:hover, button.list-item:focus-visible {\n    background-color: var(--theme-highlight);\n}\n\nbutton.list-item[data-selected="true"] {\n    background-color: var(--theme-accent) !important;\n}\n\nbutton.list-item[data-selected="true"] img {\n    transform: translate(0, -10px) rotate(0deg) !important;\n    opacity: 1 !important;\n    filter: grayscale(0) !important;\n}\n\nbutton.list-item img {\n    width: 45px;\n    height: 45px;\n    image-rendering: pixelated;\n    image-rendering: optimizeSpeed;\n    transition: transform 0.3s, filter 0.1s;\n    transform: none;\n}\n\nbutton.list-item:hover img, button.list-item:focus-visible img {\n    transform: translate(0, -8px) rotate(-5deg);\n    opacity: 1 !important;\n    filter: grayscale(0) !important;\n}\n\nbutton.list-item[data-contributed="false"] img {\n    filter: grayscale(1);\n    animation: not-contributed 2s ease-in-out 0s infinite;\n}\n\n@keyframes not-contributed {\n    from {\n        opacity: 0.6;\n    } 50% {\n        opacity: 0.4;\n    } to {\n        opacity: 0.6;\n    }\n}\n\nbutton.list-item[data-contributed="false"] img{\n    image-rendering: auto;\n}\n\ndiv.list-category h2 {\n    margin-left: 32pt;\n    margin-bottom: 16pt;\n}',""]);const l=i},6558:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,'div#filters {\n    position: fixed;\n    left: 280pt;\n    right: 0;\n    top: 0;\n    height: 48pt;\n\n    background-color: var(--theme-accent);\n    filter: drop-shadow(0 2pt 8pt #00000066);\n\n    z-index: 4;\n\n    display: flex;\n    justify-content: center;\n    gap: 20pt;\n}\n\nbutton.filter-button {\n    box-sizing: border-box;\n\n    width: 48pt;\n    height: 64pt;\n\n    padding: 8pt;\n\n    appearance: none;\n    border: none;\n\n    background-color: white;\n    transform: translate(0, -20pt);\n\n    border-bottom-left-radius: 8pt;\n    border-bottom-right-radius: 8pt;\n\n    transition: transform 0.2s ease-in-out;\n\n    display: flex;\n    align-items: flex-end;\n}\n\nbutton.filter-button.search {\n    margin-right: 20pt;\n}\n\nbutton.filter-button:hover, button.filter-button:focus-visible {\n    transform: translate(0, -10pt);\n}\n\nbutton.filter-button:active {\n    transform: translate(0, 0pt);\n}\n\nbutton.filter-button[data-selected="true"] {\n    transform: translate(0, -4pt);\n}\n\nbutton.filter-button div {\n    background-color: grey;\n    width: 100%;\n    aspect-ratio: 1/1;\n\n    mask-size: 100% 100%;\n    mask-repeat: no-repeat;\n    mask-position: center;\n\n    transition: background-color 0.2s;\n}\n\nbutton.filter-button[data-selected="true"] div, button.filter-button:active div {\n    background-color: var(--theme-accent);\n}\n',""]);const l=i},1442:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(1601),a=n.n(o),r=n(6314),i=n.n(r)()(a());i.push([e.id,"div#sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 280pt;\n\n    box-shadow: 0px 0px 32pt #00000066;\n\n    background-color: white;\n    z-index: 5;\n}",""]);const l=i},885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(9338),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},1057:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(5124),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},5678:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(4767),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},3253:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(8692),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},2172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(5939),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},731:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(7080),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},1777:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(6558),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},9111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(5072),a=n.n(o),r=n(7825),i=n.n(r),l=n(7659),d=n.n(l),u=n(5056),c=n.n(u),s=n(540),f=n.n(s),m=n(1113),p=n.n(m),g=n(1442),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(g.A,b);const h=g.A&&g.A.locals?g.A.locals:void 0},8577:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(1123)),i=o(n(6340));n(885),t.default=function(){var e=a.default.useState(),t=e[0],n=e[1];return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.default,{emoji:t}),a.default.createElement(i.default,{onEmojiChange:function(e){n(e)}}))}},290:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{d(o.next(e))}catch(e){r(e)}}function l(e){try{d(o.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((o=o.apply(e,t||[])).next())}))},l=this&&this.__generator||function(e,t){var n,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(d){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,d])}}},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getEmojiList=t.categories=t.prettyCodepoint=t.codepointToEmoji=t.normalizeCodepoint=t.getEmojiImage=t.brokenImage=void 0;var u=d(n(9434));function c(e){return e.split(" ").join("-").replace(/U\+/g,"").toLowerCase()}t.brokenImage=u.default,t.getEmojiImage=function(e,t){var n=c(e);return t?"https://raw.githubusercontent.com/jdecked/twemoji/master/assets/svg/".concat(n,".svg"):"./assets/emoji/15x15/".concat(n,".png")},t.normalizeCodepoint=c,t.codepointToEmoji=function(e){var t=c(e).split("-").map((function(e){var t=parseInt(e,16);return String.fromCodePoint(t)}));return t.push("️"),t.join("")},t.prettyCodepoint=function(e){return c(e).split("-").map((function(e){return"U+"+e.toUpperCase()}))},t.categories=["Smileys & Emotion","People & Body","Animals & Nature","Food & Drink","Travel & Places","Activities","Objects","Symbols","Flags"],t.getEmojiList=function(){return i(this,void 0,void 0,(function(){var e,t,o,a,i,d,u,s,f,m,p,g,b,h,v,y,j,_,E,w,x,M,A;return l(this,(function(l){switch(l.label){case 0:return e={},[4,Promise.resolve().then((function(){return r(n(4230))}))];case 1:return t=l.sent(),[4,Promise.resolve().then((function(){return r(n(728))}))];case 2:return o=l.sent(),[4,Promise.resolve().then((function(){return r(n(2451))}))];case 3:for(a=l.sent(),i=0,d=o.contents;i<d.length;i++)for(u=d[i],s=u.category,f=0,m=u.contents;f<m.length;f++)for(p=m[f],g=p.category,b=0,h=p.contents;b<h.length;b++){for(v=h[b],y=v.name,j=c(v.codepoint),_=v.keywords,E=!0,w=!1,x=0,M=a.codepoints;x<M.length;x++)M[x]===j&&(w=!0);w||(A=[],t[j]?A=t[j].author:(A=void 0,E=!1),e[s]||(e[s]=[]),e[s].push({name:y,codepoint:j,category:s,subcategory:g,keywords:_,author:A,contributed:E}))}return[2,e]}}))}))}},2493:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540));n(1057),t.default=function(e){var t=a.default.useState(!1),n=t[0],o=t[1];return a.default.createElement("div",{className:"copy-box"},a.default.createElement("input",{type:"text",value:e.text,"aria-readonly":!0,readOnly:!0,"aria-label":e.label}),a.default.createElement("button",{"aria-label":"Copy emoji",onClick:function(){navigator.clipboard.writeText(e.text).then((function(){o(!0),setTimeout((function(){o(!1)}),1e3)}))}},n?"Copied!":"Copy"))}},9426:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540));t.default=function(e){return e.emoji?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"emoji-categories","aria-label":"Category: "+e.emoji.category},a.default.createElement("strong",{"aria-hidden":"true"},"Category:"),a.default.createElement("br",{"aria-hidden":"true"}),a.default.createElement("span",{"aria-hidden":"true"},e.emoji.category)),a.default.createElement("div",{className:"emoji-keywords","aria-label":"Keywords"},a.default.createElement("strong",{"aria-hidden":"true"},"Keywords:"),a.default.createElement("br",{"aria-hidden":"true"}),a.default.createElement("span",null,e.emoji.keywords.join(", ")))):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"emoji-categories","aria-label":"Category: N/A"},a.default.createElement("strong",{"aria-hidden":"true"},"Category:"),a.default.createElement("br",{"aria-hidden":"true"}),a.default.createElement("span",{"aria-hidden":"true"},"N/A")),a.default.createElement("div",{className:"emoji-keywords","aria-label":"Keywords"},a.default.createElement("strong",{"aria-hidden":"true"},"Keywords:"),a.default.createElement("br",{"aria-hidden":"true"}),a.default.createElement("span",null,"N/A")))}},9127:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=n(290);t.default=function(e){var t=e.codepoint?(0,r.prettyCodepoint)(e.codepoint).join(" "):"N/A";return a.default.createElement("p",{className:"emoji-codepoint","aria-label":"Codepoint"},t)}},6936:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540));t.default=function(e){return a.default.createElement("div",{className:"emoji-contributed","aria-label":e.contributors?"Contributed by:":"Not contributed"},a.default.createElement("strong",{"aria-hidden":"true"},e.contributors?"Contributed by:":"Not contributed"),e.contributors?a.default.createElement("div",{className:"contributors",role:"list"},e.contributors.map((function(e,t){return a.default.createElement("div",{key:t,className:"contributor-name",role:"listitem"},a.default.createElement("span",{"aria-hidden":"true"},"• "),a.default.createElement("span",null,e))}))):null)}},457:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SliderButton=void 0;var a=o(n(6540)),r=o(n(2493)),i=o(n(2726)),l=o(n(5203)),d=o(n(8722)),u=o(n(1421)),c=o(n(5625)),s=o(n(1665));function f(e){var t={maskImage:"url(".concat(e.image,")")};return a.default.createElement("button",{className:"slider-button",role:"radio",name:e.sliderChoice,title:e.title,onClick:e.onChange.bind(null,e.setTo,e.id),"data-selected":e.idSelected==e.id},a.default.createElement("div",{className:"slider-button-icon",style:t}))}n(5678),t.SliderButton=f,t.default=function(e){var t=a.default.useState("https://u.cubeupload.com/fmji/"),n=t[0],o=t[1],m=a.default.useState(0),p=m[0],g=m[1],b=a.default.useState("bbcode"),h=b[0],v=b[1],y=a.default.useState(2),j=y[0],_=y[1],E=e.emoji?e.emoji.codepoint.split("-").join(""):"N/A",w=function(e,t){o(e),g(t)},x=function(e,t){v(e),_(t)};return a.default.createElement("div",{id:"emoji-copy","aria-label":"Copy emoji",role:"form"},a.default.createElement("div",{id:"emoji-copy-options","aria-label":"Copy options",role:"group"},a.default.createElement("div",{id:"emoji-copy-host","data-selected":p,"aria-label":"Emoji host"},a.default.createElement(f,{sliderChoice:"copy-host",title:"Cubeupload",setTo:"https://u.cubeupload.com/fmji/",id:0,idSelected:p,image:i.default,onChange:w}),a.default.createElement(f,{sliderChoice:"copy-host",title:"Github",setTo:"https://gh.vercte.net/forumoji/assets/emoji/15x15/",id:1,idSelected:p,image:l.default,onChange:w})),a.default.createElement("div",{id:"emoji-copy-format","data-selected":j,"aria-label":"Format"},a.default.createElement(f,{sliderChoice:"copy-format",title:"Link",setTo:"raw",id:0,idSelected:j,image:d.default,onChange:x}),a.default.createElement(f,{sliderChoice:"copy-format",title:"HTML",setTo:"html",id:1,idSelected:j,image:u.default,onChange:x}),a.default.createElement(f,{sliderChoice:"copy-format",title:"BBCode",setTo:"bbcode",id:2,idSelected:j,image:c.default,onChange:x}),a.default.createElement(f,{sliderChoice:"copy-format",title:"Markdown",setTo:"markdown",id:3,idSelected:j,image:s.default,onChange:x}))),a.default.createElement(r.default,{text:function(t){switch(h){case"raw":default:return t;case"html":return'<img src="'.concat(t,'" alt="').concat(e.emoji.name,'" />');case"bbcode":return"[img=".concat(t,"]");case"markdown":return"![".concat(e.emoji.name,"](").concat(t,")")}}("".concat(n).concat(E,".png")),label:"Emoji Copying Area"}))}},6955:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(3003)),i=n(290);t.default=function(e){var t=e.emoji?e.emoji.name:"no emoji selected",n=e.emoji?(0,i.getEmojiImage)(e.emoji.codepoint,!e.emoji.contributed):i.brokenImage;return a.default.createElement(a.default.Fragment,null,a.default.createElement("figure",null,a.default.createElement(r.default,{emoji:e.emoji}),a.default.createElement("img",{className:"emoji-image",src:n,alt:t,loading:"lazy",onError:function(e){e.target.src=i.brokenImage}})),a.default.createElement("strong",{"aria-hidden":"true"},"Normal Size:"),a.default.createElement("div",{id:"emoji-preview","aria-label":"Normal Sized",role:"group"},a.default.createElement("img",{className:"emoji-image-small",src:n,alt:t,loading:"lazy",onError:function(e){e.target.src=i.brokenImage}}),a.default.createElement("img",{className:"emoji-image-small",src:n,alt:t,loading:"lazy",onError:function(e){e.target.src=i.brokenImage}})))}},2586:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540));n(3253);var r=o(n(6955)),i=o(n(9127)),l=o(n(6936)),d=o(n(9426)),u=o(n(457));t.default=function(e){var t,n,o=!!e.emoji&&e.emoji.contributed;return a.default.createElement("div",{id:"emoji-info",role:"group","data-contributed":o},a.default.createElement(r.default,{emoji:e.emoji}),a.default.createElement(i.default,{codepoint:null===(t=e.emoji)||void 0===t?void 0:t.codepoint}),a.default.createElement(l.default,{contributors:null===(n=e.emoji)||void 0===n?void 0:n.author}),a.default.createElement(d.default,{emoji:e.emoji}),e.emoji&&e.emoji.author?a.default.createElement(u.default,{emoji:e.emoji}):null)}},3003:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=n(290);t.default=function(e){var t=e.emoji?e.emoji.name:"no emoji selected",n=e.emoji?(0,r.codepointToEmoji)(e.emoji.codepoint):"❓";return a.default.createElement("figcaption",{"aria-hidden":"true",className:"emoji-name"},n," ",t)}},4004:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2586));t.default=a.default},1800:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540));n(2172),t.default=function(){return a.default.createElement("div",{id:"header",role:"heading"},"Forumoji")}},6340:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(3336)),i=o(n(7978)),l=n(290);n(731),t.default=function(e){var t=a.default.useState(void 0),n=t[0],o=t[1],d=a.default.useState(!1),u=d[0],c=d[1],s=a.default.useState({}),f=s[0],m=s[1];function p(t){o(t),e.onEmojiChange(t)}a.default.useEffect((function(){(0,l.getEmojiList)().then(m)}),[]);var g=a.default.createRef(),b={};return a.default.createElement("div",{id:"list"},a.default.createElement(i.default,{onCategoryChange:function(e){if("Search"!==e){c(!1);var t=g.current.getBoundingClientRect().height,n=b[e].current.getBoundingClientRect().bottom+window.scrollY-t;window.scrollTo({top:n,behavior:"smooth"})}},barRef:g,categoryRefs:b,searchSelected:u,setSearchSelected:c}),a.default.createElement("div",{id:"list-items","aria-label":"Emoji list",role:"group"},Object.entries(f).map((function(e){var t=e[0],o=e[1];return"Component"===t?null:(b[t]=a.default.createRef(),a.default.createElement(r.default,{key:t,category:t,emojis:o,onEmojiChange:p,headingRef:b[t],selectedEmoji:n}))}))))}},3336:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(8157));t.default=function(e){return a.default.createElement("div",{className:"list-category","data-category":e.category},a.default.createElement("h2",{ref:e.headingRef},e.category),a.default.createElement("div",{className:"emoji-icons"},e.emojis.map((function(t){var n;return a.default.createElement(r.default,{emoji:t,key:t.codepoint,onClick:function(t){return function(){return e.onEmojiChange(t)}},selected:(null===(n=e.selectedEmoji)||void 0===n?void 0:n.codepoint)===t.codepoint})}))))}},8596:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(9826)),i=o(n(9222)),l=o(n(9139)),d=o(n(3925)),u=o(n(8033)),c=o(n(6182)),s=o(n(5187)),f=o(n(9696)),m=o(n(5842)),p={"Smileys & Emotion":r.default,"People & Body":i.default,"Animals & Nature":l.default,"Food & Drink":d.default,"Travel & Places":u.default,Activities:c.default,Objects:s.default,Symbols:f.default,Flags:m.default};t.default=function(e){var t=p[e.category],n={maskImage:"url(".concat(t,")"),WebkitMaskImage:"url(".concat(t,")")},o="filter-button"+("Search"===e.category?" search":"");return a.default.createElement("button",{className:o,onClick:e.onCategoryChange.bind(void 0,e.category),"data-selected":e.selected,"aria-label":e.category,title:e.category},t?a.default.createElement("div",{className:"category-icon",style:n,"data-mask":t}):null)}},7978:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(8596)),i=n(290);n(1777),t.default=function(e){var t=a.default.useState("Smileys & Emotion"),n=t[0],o=t[1],l=function(t){if("Search"==t)return e.setSearchSelected(!e.searchSelected),void e.onCategoryChange(t);o(t),e.onCategoryChange(t)};return document.addEventListener("wheel",(function(){requestAnimationFrame((function(){if(e.barRef.current){var t=e.barRef.current.getBoundingClientRect().height,n=window.scrollY,a=i.categories.find((function(o){var a=e.categoryRefs[o].current;return!!a&&a.getBoundingClientRect().top+n>=n-t}));a&&o(a)}}))})),a.default.createElement("div",{id:"filters",ref:e.barRef,"aria-label":"Filter Toolbar",role:"toolbar",onKeyDown:function(e){var t=e.key;if("ArrowLeft"===t||"ArrowRight"===t){var o=i.categories.indexOf(n),a=("ArrowLeft"===t?o-1:o+1)%i.categories.length,r=a;a<0&&(r=i.categories.length-1),a>=i.categories.length&&(r=0),l(i.categories[r])}}},i.categories.map((function(e){return a.default.createElement(r.default,{key:e,category:e,onCategoryChange:l,selected:e===n})})))}},8157:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=n(290);t.default=function(e){var t=(0,r.getEmojiImage)(e.emoji.codepoint,!e.emoji.contributed);return a.default.createElement("button",{className:"list-item","data-name":e.emoji.name,"data-contributed":e.emoji.contributed,onClick:e.onClick(e.emoji),"aria-label":e.emoji.name,title:e.emoji.name,"data-selected":e.selected,role:"radio","aria-checked":e.selected,name:"selected-emoji"},a.default.createElement("img",{src:t,onError:function(e){e.target.src=r.brokenImage},loading:"lazy","aria-hidden":"true"}))}},1123:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=o(n(1800)),i=o(n(4004));n(9111),t.default=function(e){return a.default.createElement("div",{id:"sidebar"},a.default.createElement(r.default,null),a.default.createElement(i.default,{emoji:e.emoji}))}},3900:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6540)),r=n(5338),i=o(n(8577));(0,r.createRoot)(document.getElementById("root")).render(a.default.createElement(a.default.StrictMode,null,a.default.createElement(i.default,null)))},9434:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0JFMTkzMSIgZD0iTTE3IDI3Yy0xLjY1NyAwLTMtMS4zNDMtMy0zdi00YzAtMS42NTcgMS4zNDMtMyAzLTMgLjYwMy0uMDA2IDYtMSA2LTUgMC0yLTItNC01LTQtMi40NDEgMC00IDItNCAzIDAgMS42NTctMS4zNDMgMy0zIDNzLTMtMS4zNDMtMy0zYzAtNC44NzggNC41OC05IDEwLTkgOCAwIDExIDUuOTgyIDExIDExIDAgNC4xNDUtMi4yNzcgNy4zMTMtNi40MTMgOC45Mi0uOS4zNTEtMS43OS41ODctMi41ODcuNzQ3VjI0YzAgMS42NTctMS4zNDMgMy0zIDN6Ii8+PGNpcmNsZSBmaWxsPSIjQkUxOTMxIiBjeD0iMTciIGN5PSIzMiIgcj0iMyIvPjwvc3ZnPg=="},5625:(e,t,n)=>{e.exports=n.p+"img/57a6d8c51d8e57e116fc.svg"},2726:(e,t,n)=>{e.exports=n.p+"img/c8c9f0f96c90615c9aee.svg"},5203:(e,t,n)=>{e.exports=n.p+"img/d6b811e7dcef5013ea24.svg"},1421:(e,t,n)=>{e.exports=n.p+"img/c7da66baab5d919b7866.svg"},8722:(e,t,n)=>{e.exports=n.p+"img/6c1f67524798414472c4.svg"},1665:(e,t,n)=>{e.exports=n.p+"img/d96d88f3229238ec53b3.svg"},6182:(e,t,n)=>{e.exports=n.p+"img/9bf028dedaf75aa80a9d.svg"},9139:(e,t,n)=>{e.exports=n.p+"img/1a00830b64adf17633a3.svg"},5842:(e,t,n)=>{e.exports=n.p+"img/aef14961015fcb1226ce.svg"},3925:(e,t,n)=>{e.exports=n.p+"img/7a83c88594ca88bb76af.svg"},5187:(e,t,n)=>{e.exports=n.p+"img/4ae6d48129268df1f414.svg"},9222:(e,t,n)=>{e.exports=n.p+"img/13eeb0876e5f5e97a46d.svg"},9826:(e,t,n)=>{e.exports=n.p+"img/1c4194de09a18a6d2625.svg"},9696:(e,t,n)=>{e.exports=n.p+"img/cdb776bd5b437f28031d.svg"},8033:(e,t,n)=>{e.exports=n.p+"img/e2efae582cdfd8ac19dd.svg"}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,r]=e[c],l=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,l,d]=n,u=0;if(i.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(d)var c=d(o)}for(t&&t(n);u<i.length;u++)r=i[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunkforumoji=self.webpackChunkforumoji||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var a=o.O(void 0,[729,238,271,814],(()=>o(3900)));a=o.O(a)})();