(function(){"use strict";var e={4048:function(e,r,t){var n=t(9242),i=t(3396);function o(e,r,t,n,o,a){const u=(0,i.up)("game-of-life");return(0,i.wg)(),(0,i.j4)(u)}function a(e,r,t,n,o,a){const u=(0,i.up)("game-of-life-cell");return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.verticalSize,((r,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"board",key:t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.horizontalSize,((r,n)=>((0,i.wg)(),(0,i.j4)(u,{key:`${n}.${t}`,x:n,y:t,game:e.gameOfLife},null,8,["x","y","game"])))),128))])))),128)}var u=t(2482);class f{constructor(e=[]){(0,u.Z)(this,"board",void 0),this.board=e}size(){return[this.board.length,this.board[0].length]}cell(e,r){return this.board[r][e]}nextTick(){const e=[],r=[];if(this.board[0])for(let t=0;t<this.board.length;t++)for(let n=0;n<this.board[t].length;n++){const i=this.aliveNeighbours(n,t);(i<2||i>3)&&e.push([n,t]),3===i&&r.push([n,t])}return e.forEach((([e,r])=>this.board[r][e]=0)),r.forEach((([e,r])=>this.board[r][e]=1)),this}aliveNeighbours(e,r){return[[e-1,r],[e+1,r],[e,r-1],[e,r+1],[e-1,r-1],[e+1,r-1],[e-1,r+1],[e+1,r+1]].filter((([,e])=>e>=0)).filter((([,e])=>e<this.board.length)).filter((([e])=>e>=0)).filter((([e,r])=>e<this.board[r].length)).filter((([e,r])=>1===this.board[r][e])).length}}var s=t(7139);function c(e,r,t,n,o,a){return(0,i.wg)(),(0,i.iD)("div",{style:(0,s.j5)({backgroundColor:e.color,height:e.size,width:e.size})},null,4)}var l=(0,i.aZ)({name:"game-of-life",props:{game:{type:f,required:!0},x:{type:Number,required:!0},y:{type:Number,required:!0}},computed:{color(){return this.game.cell(this.x,this.y)?"green":"red"},size(){const[e]=this.game.size(),r=800/e;return`${r}px`}}}),h=t(89);const d=(0,h.Z)(l,[["render",c]]);var g=d;const p=e=>[...new Array(e)].map((()=>[...new Array(e)].map((()=>Math.round(Math.random())))));var v=(0,i.aZ)({name:"game-of-life",data:()=>({gameOfLife:new f(p(400))}),created(){setInterval((()=>{this.gameOfLife.nextTick()}),1e3)},computed:{horizontalSize(){const[e]=this.gameOfLife.size();return e},verticalSize(){const[,e]=this.gameOfLife.size();return e}},components:{GameOfLifeCell:g}});const m=(0,h.Z)(v,[["render",a],["__scopeId","data-v-09a708d4"]]);var b=m,y=(0,i.aZ)({name:"App",components:{GameOfLife:b}});const w=(0,h.Z)(y,[["render",o]]);var O=w;(0,n.ri)(O).mount("#app")}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,n,i,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],o=e[c][2];for(var u=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[f])}))?n.splice(f--,1):(u=!1,o<a&&(a=o));if(u){e.splice(c--,1);var s=i();void 0!==s&&(r=s)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var i,o,a=n[0],u=n[1],f=n[2],s=0;if(a.some((function(r){return 0!==e[r]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(f)var c=f(t)}for(r&&r(n);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkgame_of_life"]=self["webpackChunkgame_of_life"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(4048)}));n=t.O(n)})();
//# sourceMappingURL=app.8da05974.js.map