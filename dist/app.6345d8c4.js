parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eDsD":[function(require,module,exports) {
"use strict";function a(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function e(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=1,n=function t(n,i,r,o){var c=this;a(this,t),e(this,"generate",function(){return{id:c.id,name:c.name,avatar:'<img src="'.concat(c.avatar,'" />'),health:100,location:{row:0,column:0},weapon:{damage:10,image:'<img src="'.concat(c.weapon,'" data-damage="10" />'),old:null}}}),this.id=n,this.name=i,this.avatar=r,this.weapon=o},i=n;exports.default=i;
},{}],"gIp2":[function(require,module,exports) {
module.exports="player-1.bd585de1.png";
},{}],"eGIY":[function(require,module,exports) {
module.exports="player-2.acc3e91b.png";
},{}],"uW9J":[function(require,module,exports) {
module.exports="weapon-1.db6dcad0.png";
},{}],"Eghy":[function(require,module,exports) {
module.exports="weapon-2.49b6cc64.png";
},{}],"LZpv":[function(require,module,exports) {
module.exports="weapon-3.95ee71fa.png";
},{}],"Z6TM":[function(require,module,exports) {
module.exports="weapon-4.a26d2854.png";
},{}],"FGkH":[function(require,module,exports) {
module.exports="obstacle.631b119d.png";
},{}],"RI4N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"player1",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"player2",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"weapon1",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"weapon2",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"weapon3",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"weapon4",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(exports,"obstacle",{enumerable:!0,get:function(){return o.default}});var e=p(require("../images/player-1.png")),r=p(require("../images/player-2.png")),t=p(require("../images/weapon-1.png")),n=p(require("../images/weapon-2.png")),u=p(require("../images/weapon-3.png")),a=p(require("../images/weapon-4.png")),o=p(require("../images/obstacle.png"));function p(e){return e&&e.__esModule?e:{default:e}}
},{"../images/player-1.png":"gIp2","../images/player-2.png":"eGIY","../images/weapon-1.png":"uW9J","../images/weapon-2.png":"Eghy","../images/weapon-3.png":"LZpv","../images/weapon-4.png":"Z6TM","../images/obstacle.png":"FGkH"}],"IEHn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./assets");function t(e,t){var c;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(c=a(e))||t&&e&&"number"==typeof e.length){c&&(e=c);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){c=e[Symbol.iterator]()},n:function(){var e=c.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==c.return||c.return()}finally{if(i)throw o}}}}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,c=new Array(t);a<t;a++)c[a]=e[a];return c}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=function a(c){var o=this;r(this,a),n(this,"new",function(){o.reset(),document.querySelector("#gameover-modal").classList.remove("open");for(var t=0;t<10;t++)o.placeObject('<img src="'.concat(e.obstacle,'" />'),"obstacle");o.players.map(function(e){o.placeObject(e,"player")}),o.placeObject('<img src="'.concat(e.weapon1,'" data-damage="20" />'),"weapon"),o.placeObject('<img src="'.concat(e.weapon2,'" data-damage="30"  />'),"weapon"),o.currentPlayer=o.players[Math.floor(Math.random()*o.players.length)],o.detectTurn()}),n(this,"reset",function(){o.players.map(function(e){var t=document.querySelector("#protection-p".concat(e.id));t.innerHTML="UNPROTECTED",t.classList.remove("protecting"),document.querySelector("#panel-p".concat(e.id," h2")).innerHTML=e.name,document.querySelector("#health-p".concat(e.id)).innerHTML=e.health,document.querySelector("#damage-p".concat(e.id)).innerHTML=e.weapon.damage,document.querySelector("#weapon-p".concat(e.id)).innerHTML=e.weapon.image})}),n(this,"placeObject",function(e,t){var a=Math.floor(Math.random()*o.tiles.length),c=o.tiles[a].dataset,r=c.row,n=c.column;if(o.tiles[a].classList.contains("occupied"))return o.placeObject(e,t);if("player"===t){if(function(e,t){if(o.players[0].location.row>0){var a=+o.players[0].location.column,c=+o.players[0].location.row,l=Math.abs(c-r),i=Math.abs(a-n);if(a===n&&l<=4){for(var s=1;s<=l;s++)if(c>r){var u=document.querySelector('[data-row="'.concat(c-s,'"][data-column="').concat(a,'"]'));if(u&&u.classList.contains("obstacle"))return!1}else{var d=document.querySelector('[data-row="'.concat(c+s,'"][data-column="').concat(a,'"]'));if(d&&d.classList.contains("obstacle"))return!1}return!0}if(c===r&&i<=4){for(var m=1;m<=i;m++)if(a>n){var y=document.querySelector('[data-row="'.concat(c,'"][data-column="').concat(a-m,'"]'));if(y&&y.classList.contains("obstacle"))return!1}else{var p=document.querySelector('[data-row="'.concat(c,'"][data-column="').concat(a+m,'"]'));if(p&&p.classList.contains("obstacle"))return!1}return!0}if(1===i&&l<=4||1===l&&i<=4)return!0}}())return console.log("detected player..."),o.placeObject(e,t);o.players[e.id-1].location={row:r,column:n},o.tiles[a].innerHTML=e.avatar}else{if("obstacle"===t&&function(e,t){var a=document.querySelector('[data-row="'.concat(e-1,'"][data-column="').concat(t,'"]')),c=document.querySelector('[data-row="'.concat(e-2,'"][data-column="').concat(t,'"]')),r=document.querySelector('[data-row="'.concat(e+1,'"][data-column="').concat(t,'"]')),n=document.querySelector('[data-row="'.concat(e+2,'"][data-column="').concat(t,'"]')),o=document.querySelector('[data-column="'.concat(t-1,'"][data-row="').concat(e,'"]')),l=document.querySelector('[data-column="'.concat(t-2,'"][data-row="').concat(e,'"]')),i=document.querySelector('[data-column="'.concat(t+1,'"][data-row="').concat(e,'"]')),s=document.querySelector('[data-column="'.concat(t+2,'"][data-row="').concat(e,'"]'));if(a&&a.classList.contains("obstacle"))return!0;if(c&&c.classList.contains("obstacle"))return!0;if(r&&r.classList.contains("obstacle"))return!0;if(n&&n.classList.contains("obstacle"))return!0;if(o&&o.classList.contains("obstacle"))return!0;if(l&&l.classList.contains("obstacle"))return!0;if(i&&i.classList.contains("obstacle"))return!0;if(s&&s.classList.contains("obstacle"))return!0;var u=document.querySelector('[data-row="'.concat(e+1,'"][data-column="').concat(t+1,'"]')),d=document.querySelector('[data-row="'.concat(e-1,'"][data-column="').concat(t-1,'"]')),m=document.querySelector('[data-row="'.concat(e-1,'"][data-column="').concat(t+1,'"]')),y=document.querySelector('[data-row="'.concat(e+1,'"][data-column="').concat(t-1,'"]'));return!(!u||!u.classList.contains("obstacle"))||!(!d||!d.classList.contains("obstacle"))||!(!m||!m.classList.contains("obstacle"))||!(!y||!y.classList.contains("obstacle"))||void 0}(+r,+n))return console.log("detected obstacle..."),o.placeObject(e,t);o.tiles[a].innerHTML=e}o.tiles[a].classList.add(t),o.tiles[a].classList.add("occupied")}),n(this,"detectTurn",function(){var e,a=t(document.querySelectorAll(".panel"));try{for(a.s();!(e=a.n()).done;){e.value.classList.remove("current")}}catch(c){a.e(c)}finally{a.f()}document.querySelector("#panel-p".concat(o.currentPlayer.id)).classList.add("current"),o.showPlayerMoves()}),n(this,"changeTurn",function(){1===o.currentPlayer.id?o.currentPlayer=o.players[1]:o.currentPlayer=o.players[0],o.detectTurn()}),n(this,"movePlayer",function(e){var a=document.querySelector('[data-row="'.concat(o.currentPlayer.location.row,'"][data-column="').concat(o.currentPlayer.location.column,'"]')),c="IMG"===e.target.nodeName?e.path[1]:e.target;(o.currentPlayer.weapon.old?(a.innerHTML=o.currentPlayer.weapon.old,a.classList.add("weapon"),a.classList.remove("player"),o.players[o.currentPlayer.id-1].weapon.old=null):(a.innerHTML="",a.classList=""),c.classList.contains("weapon"))&&(o.players[o.currentPlayer.id-1].weapon.old=o.currentPlayer.weapon.image,o.players[o.currentPlayer.id-1].weapon.image=c.innerHTML,o.players[o.currentPlayer.id-1].weapon.damage=e.target.dataset.damage,document.querySelector("#weapon-p".concat(o.currentPlayer.id)).innerHTML=c.innerHTML,document.querySelector("#damage-p".concat(o.currentPlayer.id)).innerHTML=e.target.dataset.damage,document.querySelector("#weapon-sound").play());c.innerHTML=o.currentPlayer.avatar,c.classList.add("player","occupied"),o.players[o.currentPlayer.id-1].location={row:c.dataset.row,column:c.dataset.column};var r,n=t(document.querySelectorAll(".highlight"));try{for(n.s();!(r=n.n()).done;){var l=r.value;l.classList.remove("highlight"),l.removeEventListener("click",o.movePlayer)}}catch(i){n.e(i)}finally{n.f()}o.detectFight()?o.retaliation():o.changeTurn()}),n(this,"detectFight",function(){var e=Number(o.currentPlayer.location.row),t=Number(o.currentPlayer.location.column),a=document.querySelector('[data-row="'.concat(e-1,'"][data-column="').concat(t,'"]')),c=document.querySelector('[data-row="'.concat(e+1,'"][data-column="').concat(t,'"]')),r=document.querySelector('[data-row="'.concat(e,'"][data-column="').concat(t+1,'"]')),n=document.querySelector('[data-row="'.concat(e,'"][data-column="').concat(t-1,'"]'));return!(!a||!a.classList.contains("player"))||(!(!c||!c.classList.contains("player"))||(!(!r||!r.classList.contains("player"))||(!(!n||!n.classList.contains("player"))||void 0)))}),n(this,"retaliation",function(){var e=o.currentPlayer;o.currentPlayer=1===e.id?o.players[1]:o.players[0];var t=o.currentPlayer;document.querySelector("#panel-p".concat(e.id)).classList.remove("current"),document.querySelector("#panel-p".concat(t.id)).classList.add("current");var a=document.querySelector("#fight-modal");document.querySelector("#avatar").innerHTML=t.avatar,setTimeout(function(){a.classList.add("open")},500);var c=function(){document.querySelector("#protect").removeEventListener("click",r),document.querySelector("#run").removeEventListener("click",n),a.classList.remove("open");var c=t.health-e.weapon.damage;document.querySelector("#health-p".concat(t.id)).innerHTML=c,o.players[t.id-1].health=c;var l=document.querySelector("#protection-p".concat(t.id));l.innerHTML="UNPROTECTED",l.classList.remove("protecting"),o.gameOver(e,t)||o.retaliation()},r=function(){document.querySelector("#attack").removeEventListener("click",c),document.querySelector("#run").removeEventListener("click",n),a.classList.remove("open");var r=t.health-e.weapon.damage/2;document.querySelector("#health-p".concat(t.id)).innerHTML=r,o.players[t.id-1].health=r;var l=document.querySelector("#protection-p".concat(t.id));l.innerHTML="PROTECTED",l.classList.add("protecting"),o.gameOver(e,t)||o.retaliation()},n=function(){document.querySelector("#attack").removeEventListener("click",c),document.querySelector("#protect").removeEventListener("click",r),a.classList.remove("open");var n=t.health-e.weapon.damage/2;document.querySelector("#health-p".concat(t.id)).innerHTML=n,o.players[t.id-1].health=n;var l=document.querySelector("#protection-p".concat(t.id));l.innerHTML="PROTECTED",l.classList.add("protecting"),o.gameOver(e,t)||o.showPlayerMoves()};document.querySelector("#protect").addEventListener("click",r,{once:!0}),document.querySelector("#attack").addEventListener("click",c,{once:!0}),document.querySelector("#run").addEventListener("click",n,{once:!0})}),n(this,"gameOver",function(e,t){if(o.players[t.id-1].health<=0)return document.querySelector("#gameover-modal").classList.add("open"),document.querySelector("#gameover-modal p:first-of-type").innerHTML="".concat(e.name,", you are the winner! :)"),document.querySelector("#gameover-modal p:last-of-type").innerHTML="".concat(t.name,", you are the loser! :("),!0}),n(this,"showPlayerMoves",function(){for(var e=Number(o.currentPlayer.location.row),t=Number(o.currentPlayer.location.column),a=function(a){return document.querySelector('[data-row="'.concat(e-a,'"][data-column="').concat(t,'"]'))},c=function(a){return document.querySelector('[data-row="'.concat(e,'"][data-column="').concat(t+a,'"]'))},r=function(a){return document.querySelector('[data-row="'.concat(e+a,'"][data-column="').concat(t,'"]'))},n=function(a){return document.querySelector('[data-row="'.concat(e,'"][data-column="').concat(t-a,'"]'))},l=1;l<=3;l++)if(a(l)){if(a(l).classList.contains("obstacle")||a(l).classList.contains("player"))break;a(l).classList.add("highlight"),a(l).addEventListener("click",o.movePlayer)}for(var i=1;i<=3;i++)if(c(i)){if(c(i).classList.contains("obstacle")||c(i).classList.contains("player"))break;c(i).classList.add("highlight"),c(i).addEventListener("click",o.movePlayer)}for(var s=1;s<=3;s++)if(r(s)){if(r(s).classList.contains("obstacle")||r(s).classList.contains("player"))break;r(s).classList.add("highlight"),r(s).addEventListener("click",o.movePlayer)}for(var u=1;u<=3;u++)if(n(u)){if(n(u).classList.contains("obstacle")||n(u).classList.contains("player"))break;n(u).classList.add("highlight"),n(u).addEventListener("click",o.movePlayer)}}),this.players=c,this.tiles=document.querySelectorAll(".board > div"),this.currentPlayer=null};n(o,"createBoard",function(){for(var e=0,t=1,a="",c=0;c<81;c++)e++,a+='<div id="tile-'.concat(c+1,'"  data-row="').concat(t,'"  data-column="').concat(e,'"></div>'),9===e&&(e=0,t++);document.querySelector(".board").innerHTML=a});var l=o;exports.default=l;
},{"./assets":"RI4N"}],"QdeU":[function(require,module,exports) {
"use strict";var e=n(require("./player")),r=require("./assets"),t=n(require("./game"));function n(e){return e&&e.__esModule?e:{default:e}}t.default.createBoard();var u=function(){var n=new e.default(1,"Rick",r.player1,r.weapon3).generate(),u=new e.default(2,"Lori",r.player2,r.weapon4).generate();t.default.createBoard(),new t.default([n,u]).new()},a=document.querySelector(".rules-btn"),o=document.querySelector("#rules-modal button");a.addEventListener("click",function(){return document.querySelector("#rules-modal").classList.add("open")}),o.addEventListener("click",function(){return document.querySelector("#rules-modal").classList.remove("open")}),document.querySelector(".new-game").addEventListener("click",u),document.querySelector("#gameover-modal button").addEventListener("click",u);
},{"./player":"eDsD","./assets":"RI4N","./game":"IEHn"}]},{},["QdeU"], null)
//# sourceMappingURL=app.6345d8c4.js.map