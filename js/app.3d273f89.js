(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"15c9":function(e,t,n){"use strict";var r=n("bbfb"),a=n.n(r);a.a},bbfb:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container",attrs:{id:"app"}},[e._m(0),n("label",{staticClass:"mode-selector-wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.parsingMode,expression:"parsingMode"}],staticClass:"mode-selector",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.parsingMode=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"JSON"}},[e._v("JSON format")]),n("option",{attrs:{value:"SPACE",selected:""}},[e._v("Spaces separation")]),n("option",{attrs:{value:"CSV"}},[e._v("Comma Separated Values")])])]),n("label",{staticClass:"input-textarea-wrapper"},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.userText,expression:"userText",modifiers:{trim:!0}}],staticClass:"input-textarea",attrs:{placeholder:e.inputPlaceholder},domProps:{value:e.userText},on:{input:function(t){t.target.composing||(e.userText=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"arrow"}),n("label",{staticClass:"output-textarea-wrapper"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resultTable,expression:"resultTable"}],staticClass:"output-textarea",attrs:{placeholder:e.outputPlaceholder,readonly:""},domProps:{value:e.resultTable},on:{input:function(t){t.target.composing||(e.resultTable=t.target.value)}}})]),n("article",{staticClass:"format-description",domProps:{innerHTML:e._s(e.formatDescription)}})])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h3",[e._v("Utf-8 table converter")])])}],s=(n("6b54"),n("d225")),u=n("b0b4"),l=n("308d"),c=n("6bb5"),p=n("4e2b"),d=n("9ab4"),f=function e(t,n,r,a){Object(s["a"])(this,e),this.inputPlaceholder=n,this.outputPlaceholder=r,this.formatDescription=a,this.parser=t},h=f,m='[[    "place", "time, ms", "need acceleration"],\n ["on server",        255,                true],\n ["on client",       3040,               false]]\n',v="┏━━━━━━━━━┯━━━━━━━━┯━━━━━━━━━━━━━━━━━┓\n┃place    │time, ms│need acceleration┃\n┠─────────┼────────┼─────────────────┨\n┃on server│     255│             true┃\n┠─────────┼────────┼─────────────────┨\n┃on client│    3040│            false┃\n┗━━━━━━━━━┷━━━━━━━━┷━━━━━━━━━━━━━━━━━┛\n",b='<a href="https://en.wikipedia.org/wiki/JSON">JavaScript Object Notation</a> is human-readable file format that uses text to transmit data and array types. It is a very common. Write down your data as in the example.',g=function(e){return JSON.parse(e)},y=new h(g,m,v,b),w=y,S=(n("28a5"),n("a481"),"Filesystem      Size  Used Avail Use% Mounted\nudev            7,8G     0  7,8G   0% /dev\ntmpfs           1,6G  2,1M  1,6G   1% /run\n/dev/sda2       310G   85G  210G  29% /\n/dev/sda6       150G   70G   80G  47% /media/sda6\n"),x="┏━━━━━━━━━━┯━━━━┯━━━━┯━━━━━┯━━━━┯━━━━━━━━━━━┓\n┃Filesystem│Size│Used│Avail│Use%│Mounted    ┃\n┠──────────┼────┼────┼─────┼────┼───────────┨\n┃udev      │7,8G│0   │7,8G │0%  │/dev       ┃\n┠──────────┼────┼────┼─────┼────┼───────────┨\n┃tmpfs     │1,6G│2,1M│1,6G │1%  │/run       ┃\n┠──────────┼────┼────┼─────┼────┼───────────┨\n┃/dev/sda2 │310G│85G │210G │29% │/          ┃\n┠──────────┼────┼────┼─────┼────┼───────────┨\n┃/dev/sda6 │150G│70G │80G  │47% │/media/sda6┃\n┗━━━━━━━━━━┷━━━━┷━━━━┷━━━━━┷━━━━┷━━━━━━━━━━━┛\n",O="Write down your data in the most obvious way: each row starts at the beginning of the line, cells separated by spaces.",j=function(e){var t=e.trim().replace(/\t/,"    ");return t.split(/\s*\n\s*/).map(function(e){return e.split(/\s+/)})},C=new h(j,S,x,O),G=C,M="Moscow,55.7558° N , 37.6173° E\n London,51.5074° N ,00.1278° W\nNew York,40.7128° N , 74.0060° W\n",P="┏━━━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━┓\n┃Moscow  │55.7558° N│37.6173° E┃\n┠────────┼──────────┼──────────┨\n┃London  │51.5074° N│00.1278° W┃\n┠────────┼──────────┼──────────┨\n┃New York│40.7128° N│74.0060° W┃\n┗━━━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━┛\n",T="Write down your data: each row starts at the beginning of the line, cells separated by comma.",_=function(e){var t=e.trim().replace(/\t/,"    ");return t.split(/\s*\n\s*/).map(function(e){return e.split(/\s*,\s*/)})},N=new h(_,M,P,T),k=N,W=(n("6c7b"),n("f576"),n("14b9"),function(){function e(t){Object(s["a"])(this,e),this.table=this.convertCellToString(t),this.columnWidth=this.getColumnWidth(this.table)}return Object(u["a"])(e,[{key:"toString",value:function(){var e=this,t=this.columnWidth.map(function(e){return"━".repeat(e)}),n=this.columnWidth.map(function(e){return"─".repeat(e)}),r="┏"+t.join("┯")+"┓\n",a="┠"+n.join("┼")+"┨\n",o="┗"+t.join("┷")+"┛\n",i=this.table.map(function(t){return"┃"+t.map(function(t,n){return t.padStart(e.columnWidth[n]," ")}).join("│")+"┃\n"}),s=r+i.join(a)+o;return s}},{key:"getColumnWidth",value:function(e){var t=e[0].length,n=new Array(t);n.fill(0);for(var r=0;r<t;r++)for(var a=0;a<e.length;a++)n[r]=Math.max(n[r],e[a][r].length);return n}},{key:"convertCellToString",value:function(e){for(var t=e[0].length,n=1;n<e.length;n++)if(e[n].length!==t)throw new Error("Strings must be the same length:\n"+"row 0 length = ".concat(t,",\n")+"row ".concat(n," length = ").concat(e[n].length,"."));for(var r=0;r<e.length;r++)for(var a=0;a<t;a++)e[r][a]=e[r][a].toString();return e}}]),e}()),E=W,J=n("60a3"),V=r=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).call(this)),e.userText="",e.parsingMode="SPACE",e}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"inputPlaceholder",get:function(){return r.StrategyVariants[this.parsingMode].inputPlaceholder}},{key:"outputPlaceholder",get:function(){return r.StrategyVariants[this.parsingMode].outputPlaceholder}},{key:"formatDescription",get:function(){return r.StrategyVariants[this.parsingMode].formatDescription}},{key:"resultTable",get:function(){if(0===this.userText.length)return"";try{var e=r.StrategyVariants[this.parsingMode].parser,t=e(this.userText);return new E(t).toString()}catch(n){return n.toString()}}}]),t}(J["b"]);V.StrategyVariants={JSON:w,SPACE:G,CSV:k},V=r=d["a"]([J["a"]],V);var A=V,U=A,D=(n("15c9"),n("2877")),$=Object(D["a"])(U,o,i,!1,null,"10a1d640",null),L=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.3d273f89.js.map