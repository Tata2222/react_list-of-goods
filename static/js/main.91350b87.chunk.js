(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),c=n(1),l=n(2),i=n(4),u=n(3),g=(n(13),n(7)),h=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={maxWordLength:10,goods:t.props.goods},t.listReverse=function(){t.setState((function(t){return{goods:t.goods.reverse()}}))},t.sortByAlphabets=function(){t.setState((function(t){return{goods:t.goods.sort()}}))},t.resetOrder=function(){t.setState({goods:Object(g.a)(t.props.goods),maxWordLength:10})},t.sortByLength=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.length-e.length}))}}))},t.selectLength=function(e){var n=e.target.value;t.setState((function(t){return{maxWordLength:n,goods:t.goods.filter((function(t){return t.length<=n}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.maxWordLength;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"button-panel"},a.a.createElement("button",{type:"button",onClick:this.listReverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortByAlphabets},"A-Z"),a.a.createElement("button",{type:"button",onClick:this.resetOrder},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),a.a.createElement("select",{value:this.state.maxWordLength,onChange:this.selectLength,className:"select-btn"},Array(10).fill("").map((function(t,e){return a.a.createElement("option",{value:e+1},e+1)})))),a.a.createElement("div",null,a.a.createElement("ul",null,this.state.goods.filter((function(e){return e.length<=t})).map((function(t){return a.a.createElement("li",{key:t},t)})))))}}]),n}(a.a.Component),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isVisible:!1},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=m.slice();return a.a.createElement("div",{className:"app"},this.state.isVisible?a.a.createElement(h,{goods:e}):a.a.createElement("button",{type:"button",onClick:function(){return t.setState((function(t){return{isVisible:!0}}))}},"Start"))}}]),n}(a.a.Component);s.a.render(a.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.91350b87.chunk.js.map