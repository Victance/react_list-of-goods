(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r,s=n(3),c=n.n(s),o=n(4),a=n(5),i=n(8),u=n(6),l=n(7),h=n(1),b=n.n(h),d=(n(13),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function j(t,e,n){var s=Object(l.a)(t);return s.sort((function(t,n){switch(e){case r.ALPABET:return t.localeCompare(n);case r.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var f=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:r.NONE},t.changeState=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.changeReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:r.NONE})},t.sortType=function(e){t.setState({sortType:e})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,s=e.sortType,c=e.isReversed;return Object(d.jsx)("div",{className:"App",children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",onClick:function(){return t.sortType(r.ALPABET)},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.sortType(r.LENGTH)},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:this.changeReverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(d.jsx)("ul",{className:"Goods",children:j(p,s,c).map((function(t){return Object(d.jsx)("li",{className:"Goods__item",children:t},t)}))})]}):Object(d.jsx)("button",{type:"button",onClick:this.changeState,children:"Start"})})}}]),n}(b.a.Component);c.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b33fe3c.chunk.js.map