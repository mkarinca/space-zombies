// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Player = function Player(id, name, avatar, weapon) {
  var _this = this;

  _classCallCheck(this, Player);

  _defineProperty(this, "generate", function () {
    return {
      id: _this.id,
      name: _this.name,
      avatar: "<img src=\"".concat(_this.avatar, "\" />"),
      health: 100,
      location: {
        row: 0,
        column: 0
      },
      weapon: {
        damage: 10,
        image: "<img src=\"".concat(_this.weapon, "\" data-damage=\"10\" />"),
        old: null
      }
    };
  });

  this.id = id;
  this.name = name;
  this.avatar = avatar;
  this.weapon = weapon;
};

var _default = Player;
exports.default = _default;
},{}],"images/player-1.png":[function(require,module,exports) {
module.exports = "/player-1.001e6eea.png";
},{}],"images/player-2.png":[function(require,module,exports) {
module.exports = "/player-2.e90b6620.png";
},{}],"images/weapon-1.png":[function(require,module,exports) {
module.exports = "/weapon-1.7c7fabc4.png";
},{}],"images/weapon-2.png":[function(require,module,exports) {
module.exports = "/weapon-2.2379f64f.png";
},{}],"images/weapon-3.png":[function(require,module,exports) {
module.exports = "/weapon-3.b626fcf3.png";
},{}],"images/weapon-4.png":[function(require,module,exports) {
module.exports = "/weapon-4.db162740.png";
},{}],"images/obstacle.png":[function(require,module,exports) {
module.exports = "/obstacle.fc2b48e3.png";
},{}],"js/assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "player1", {
  enumerable: true,
  get: function () {
    return _player.default;
  }
});
Object.defineProperty(exports, "player2", {
  enumerable: true,
  get: function () {
    return _player2.default;
  }
});
Object.defineProperty(exports, "weapon1", {
  enumerable: true,
  get: function () {
    return _weapon.default;
  }
});
Object.defineProperty(exports, "weapon2", {
  enumerable: true,
  get: function () {
    return _weapon2.default;
  }
});
Object.defineProperty(exports, "weapon3", {
  enumerable: true,
  get: function () {
    return _weapon3.default;
  }
});
Object.defineProperty(exports, "weapon4", {
  enumerable: true,
  get: function () {
    return _weapon4.default;
  }
});
Object.defineProperty(exports, "obstacle", {
  enumerable: true,
  get: function () {
    return _obstacle.default;
  }
});

var _player = _interopRequireDefault(require("../images/player-1.png"));

var _player2 = _interopRequireDefault(require("../images/player-2.png"));

var _weapon = _interopRequireDefault(require("../images/weapon-1.png"));

var _weapon2 = _interopRequireDefault(require("../images/weapon-2.png"));

var _weapon3 = _interopRequireDefault(require("../images/weapon-3.png"));

var _weapon4 = _interopRequireDefault(require("../images/weapon-4.png"));

var _obstacle = _interopRequireDefault(require("../images/obstacle.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../images/player-1.png":"images/player-1.png","../images/player-2.png":"images/player-2.png","../images/weapon-1.png":"images/weapon-1.png","../images/weapon-2.png":"images/weapon-2.png","../images/weapon-3.png":"images/weapon-3.png","../images/weapon-4.png":"images/weapon-4.png","../images/obstacle.png":"images/obstacle.png"}],"js/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assets = require("./assets");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Game = function Game(players) {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "new", function () {
    _this.reset(); //Close gameover modal window when click on newgame button inside modal.


    document.querySelector("#gameover-modal").classList.remove("open"); //Place obstacles to game board (default obstacle number is 10)

    for (var i = 0; i < 10; i++) {
      _this.placeObject("<img src=\"".concat(_assets.obstacle, "\" />"), "obstacle");
    } //Place players to game board


    _this.players.map(function (player) {
      _this.placeObject(player, "player");
    }); //Place weapons to game board


    _this.placeObject("<img src=\"".concat(_assets.weapon1, "\" data-damage=\"20\" />"), "weapon");

    _this.placeObject("<img src=\"".concat(_assets.weapon2, "\" data-damage=\"30\"  />"), "weapon"); //Define current player on startup


    _this.currentPlayer = _this.players[Math.floor(Math.random() * _this.players.length)];

    _this.detectTurn();
  });

  _defineProperty(this, "reset", function () {
    _this.players.map(function (player) {
      var protection = document.querySelector("#protection-p".concat(player.id));
      protection.innerHTML = "UNPROTECTED";
      protection.classList.remove("protecting");
      document.querySelector("#panel-p".concat(player.id, " h2")).innerHTML = player.name;
      document.querySelector("#health-p".concat(player.id)).innerHTML = player.health;
      document.querySelector("#damage-p".concat(player.id)).innerHTML = player.weapon.damage;
      document.querySelector("#weapon-p".concat(player.id)).innerHTML = player.weapon.image;
    });
  });

  _defineProperty(this, "placeObject", function (item, type) {
    var randomTile = Math.floor(Math.random() * _this.tiles.length);
    var _this$tiles$randomTil = _this.tiles[randomTile].dataset,
        row = _this$tiles$randomTil.row,
        column = _this$tiles$randomTil.column; // Check whether obstacles are placed horizontally

    var detectObstacle = function detectObstacle(row, column) {
      var r1 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column, "\"]"));
      var r2 = document.querySelector("[data-row=\"".concat(row - 2, "\"][data-column=\"").concat(column, "\"]"));
      var r3 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column, "\"]"));
      var r4 = document.querySelector("[data-row=\"".concat(row + 2, "\"][data-column=\"").concat(column, "\"]")); // Check whether obstacles are placed vertically

      var c1 = document.querySelector("[data-column=\"".concat(column - 1, "\"][data-row=\"").concat(row, "\"]"));
      var c2 = document.querySelector("[data-column=\"".concat(column - 2, "\"][data-row=\"").concat(row, "\"]"));
      var c3 = document.querySelector("[data-column=\"".concat(column + 1, "\"][data-row=\"").concat(row, "\"]"));
      var c4 = document.querySelector("[data-column=\"".concat(column + 2, "\"][data-row=\"").concat(row, "\"]"));
      if (r1 && r1.classList.contains("obstacle")) return true;
      if (r2 && r2.classList.contains("obstacle")) return true;
      if (r3 && r3.classList.contains("obstacle")) return true;
      if (r4 && r4.classList.contains("obstacle")) return true;
      if (c1 && c1.classList.contains("obstacle")) return true;
      if (c2 && c2.classList.contains("obstacle")) return true;
      if (c3 && c3.classList.contains("obstacle")) return true;
      if (c4 && c4.classList.contains("obstacle")) return true; // Check whether obstacles are placed diagonally

      var r1c1 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column + 1, "\"]"));
      var r2c2 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column - 1, "\"]"));
      var r3c3 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column + 1, "\"]"));
      var r4c4 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column - 1, "\"]"));
      if (r1c1 && r1c1.classList.contains("obstacle")) return true;
      if (r2c2 && r2c2.classList.contains("obstacle")) return true;
      if (r3c3 && r3c3.classList.contains("obstacle")) return true;
      if (r4c4 && r4c4.classList.contains("obstacle")) return true;
    };

    var detectPlayer = function detectPlayer(r, c) {
      if (_this.players[0].location.row > 0) {
        var p1c = +_this.players[0].location.column;
        var p1r = +_this.players[0].location.row;
        var yDistance = Math.abs(p1r - row);
        var xDistance = Math.abs(p1c - column); // Check if P1 is in same column and less than 4 steps away from P2

        if (p1c === column && yDistance <= 4) {
          // Check if there's a barrier between two players
          for (var i = 1; i <= yDistance; i++) {
            if (p1r > row) {
              var y = document.querySelector("[data-row=\"".concat(p1r - i, "\"][data-column=\"").concat(p1c, "\"]"));
              if (y && y.classList.contains("obstacle")) return false;
            } else {
              var _y = document.querySelector("[data-row=\"".concat(p1r + i, "\"][data-column=\"").concat(p1c, "\"]"));

              if (_y && _y.classList.contains("obstacle")) return false;
            }
          }

          return true;
        } // Check if P1 is in same row and less than 4 steps away from P2


        if (p1r === row && xDistance <= 4) {
          // Check if there's a obstacle between two players
          for (var _i = 1; _i <= xDistance; _i++) {
            if (p1c > column) {
              var x = document.querySelector("[data-row=\"".concat(p1r, "\"][data-column=\"").concat(p1c - _i, "\"]"));
              if (x && x.classList.contains("obstacle")) return false;
            } else {
              var _x = document.querySelector("[data-row=\"".concat(p1r, "\"][data-column=\"").concat(p1c + _i, "\"]"));

              if (_x && _x.classList.contains("obstacle")) return false;
            }
          }

          return true;
        }

        if (xDistance === 1 && yDistance <= 4 || yDistance === 1 && xDistance <= 4) return true;
      }
    };

    if (_this.tiles[randomTile].classList.contains("occupied")) return _this.placeObject(item, type);

    if (type === "player") {
      if (detectPlayer(+row, +column)) {
        return _this.placeObject(item, type);
      }

      _this.players[item.id - 1].location = {
        row: row,
        column: column
      };
      _this.tiles[randomTile].innerHTML = item.avatar;
    } else {
      if (type === "obstacle" && detectObstacle(+row, +column)) {
        return _this.placeObject(item, type);
      }

      _this.tiles[randomTile].innerHTML = item;
    }

    _this.tiles[randomTile].classList.add(type);

    _this.tiles[randomTile].classList.add("occupied");
  });

  _defineProperty(this, "detectTurn", function () {
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".panel")),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var panel = _step.value;
        panel.classList.remove("current");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    document.querySelector("#panel-p".concat(_this.currentPlayer.id)).classList.add("current");

    _this.showPlayerMoves();
  });

  _defineProperty(this, "changeTurn", function () {
    if (_this.currentPlayer.id === 1) {
      _this.currentPlayer = _this.players[1];
    } else {
      _this.currentPlayer = _this.players[0];
    }

    _this.detectTurn();
  });

  _defineProperty(this, "movePlayer", function (e) {
    var oldPos = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var newPos = e.target.nodeName === "IMG" ? e.path[1] : e.target;

    if (_this.currentPlayer.weapon.old) {
      oldPos.innerHTML = _this.currentPlayer.weapon.old;
      oldPos.classList.add("weapon");
      oldPos.classList.remove("player");
      _this.players[_this.currentPlayer.id - 1].weapon.old = null;
    } else {
      oldPos.innerHTML = "";
      oldPos.classList = "";
    }

    if (newPos.classList.contains("weapon")) {
      _this.players[_this.currentPlayer.id - 1].weapon.old = _this.currentPlayer.weapon.image;
      _this.players[_this.currentPlayer.id - 1].weapon.image = newPos.innerHTML;
      _this.players[_this.currentPlayer.id - 1].weapon.damage = e.target.dataset.damage;
      document.querySelector("#weapon-p".concat(_this.currentPlayer.id)).innerHTML = newPos.innerHTML;
      document.querySelector("#damage-p".concat(_this.currentPlayer.id)).innerHTML = e.target.dataset.damage;
      var weaponSound = document.querySelector("#weapon-sound");
      weaponSound.play();
    }

    newPos.innerHTML = _this.currentPlayer.avatar;
    newPos.classList.add("player", "occupied");
    _this.players[_this.currentPlayer.id - 1].location = {
      row: newPos.dataset.row,
      column: newPos.dataset.column
    };

    var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".highlight")),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;
        tile.classList.remove("highlight");
        tile.removeEventListener("click", _this.movePlayer);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (_this.detectFight()) {
      _this.retaliation();
    } else {
      _this.changeTurn();
    }
  });

  _defineProperty(this, "detectFight", function () {
    var row = Number(_this.currentPlayer.location.row);
    var column = Number(_this.currentPlayer.location.column);
    var north = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column, "\"]"));
    var south = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column, "\"]"));
    var east = document.querySelector("[data-row=\"".concat(row, "\"][data-column=\"").concat(column + 1, "\"]"));
    var west = document.querySelector("[data-row=\"".concat(row, "\"][data-column=\"").concat(column - 1, "\"]"));
    if (north && north.classList.contains("player")) return true;
    if (south && south.classList.contains("player")) return true;
    if (east && east.classList.contains("player")) return true;
    if (west && west.classList.contains("player")) return true;
  });

  _defineProperty(this, "retaliation", function () {
    var attacker = _this.currentPlayer;
    _this.currentPlayer = attacker.id === 1 ? _this.players[1] : _this.players[0];
    var opponent = _this.currentPlayer;
    document.querySelector("#panel-p".concat(attacker.id)).classList.remove("current");
    document.querySelector("#panel-p".concat(opponent.id)).classList.add("current"); // 1. Display modal window with attack information

    var fightModal = document.querySelector("#fight-modal");
    document.querySelector("#avatar").innerHTML = opponent.avatar;
    setTimeout(function () {
      fightModal.classList.add("open");
    }, 500);

    var attack = function attack() {
      document.querySelector("#protect").removeEventListener("click", protect);
      document.querySelector("#run").removeEventListener("click", run);
      fightModal.classList.remove("open");
      var health = opponent.health - attacker.weapon.damage;
      document.querySelector("#health-p".concat(opponent.id)).innerHTML = health;
      _this.players[opponent.id - 1].health = health;
      var protection = document.querySelector("#protection-p".concat(opponent.id));
      protection.innerHTML = "UNPROTECTED";
      protection.classList.remove("protecting");
      if (_this.gameOver(attacker, opponent)) return;

      _this.retaliation();
    };

    var protect = function protect() {
      document.querySelector("#attack").removeEventListener("click", attack);
      document.querySelector("#run").removeEventListener("click", run);
      fightModal.classList.remove("open");
      var health = opponent.health - attacker.weapon.damage / 2;
      document.querySelector("#health-p".concat(opponent.id)).innerHTML = health;
      _this.players[opponent.id - 1].health = health;
      var protection = document.querySelector("#protection-p".concat(opponent.id));
      protection.innerHTML = "PROTECTED";
      protection.classList.add("protecting");
      if (_this.gameOver(attacker, opponent)) return;

      _this.retaliation();
    };

    var run = function run() {
      document.querySelector("#attack").removeEventListener("click", attack);
      document.querySelector("#protect").removeEventListener("click", protect);
      fightModal.classList.remove("open");
      var health = opponent.health - attacker.weapon.damage / 2;
      document.querySelector("#health-p".concat(opponent.id)).innerHTML = health;
      _this.players[opponent.id - 1].health = health;
      var protection = document.querySelector("#protection-p".concat(opponent.id));
      protection.innerHTML = "PROTECTED";
      protection.classList.add("protecting");
      if (_this.gameOver(attacker, opponent)) return;

      _this.showPlayerMoves();
    };

    document.querySelector("#protect").addEventListener("click", protect, {
      once: true
    });
    document.querySelector("#attack").addEventListener("click", attack, {
      once: true
    });
    document.querySelector("#run").addEventListener("click", run, {
      once: true
    });
  });

  _defineProperty(this, "gameOver", function (attacker, opponent) {
    if (_this.players[opponent.id - 1].health <= 0) {
      var gameOverModal = document.querySelector("#gameover-modal");
      gameOverModal.classList.add("open");
      document.querySelector("#gameover-modal p:first-of-type").innerHTML = "".concat(attacker.name, ", you are the winner! :)");
      document.querySelector("#gameover-modal p:last-of-type").innerHTML = "".concat(opponent.name, ", you are the loser! :(");
      return true;
    }
  });

  _defineProperty(this, "showPlayerMoves", function () {
    var row = Number(_this.currentPlayer.location.row);
    var column = Number(_this.currentPlayer.location.column);

    var playerNorthMoves = function playerNorthMoves(tile) {
      return document.querySelector("[data-row=\"".concat(row - tile, "\"][data-column=\"").concat(column, "\"]"));
    };

    var playerEastMoves = function playerEastMoves(tile) {
      return document.querySelector("[data-row=\"".concat(row, "\"][data-column=\"").concat(column + tile, "\"]"));
    };

    var playerSouthMoves = function playerSouthMoves(tile) {
      return document.querySelector("[data-row=\"".concat(row + tile, "\"][data-column=\"").concat(column, "\"]"));
    };

    var playerWestMoves = function playerWestMoves(tile) {
      return document.querySelector("[data-row=\"".concat(row, "\"][data-column=\"").concat(column - tile, "\"]"));
    }; //Highlight possible tiles NORTH(UP)


    for (var i = 1; i <= 3; i++) {
      if (playerNorthMoves(i)) {
        if (!playerNorthMoves(i).classList.contains("obstacle") && !playerNorthMoves(i).classList.contains("player")) {
          playerNorthMoves(i).classList.add("highlight");
          playerNorthMoves(i).addEventListener("click", _this.movePlayer);
        } else {
          break;
        }
      }
    } //Highlight possible tiles EAST(RIGHT)


    for (var _i2 = 1; _i2 <= 3; _i2++) {
      if (playerEastMoves(_i2)) {
        if (!playerEastMoves(_i2).classList.contains("obstacle") && !playerEastMoves(_i2).classList.contains("player")) {
          playerEastMoves(_i2).classList.add("highlight");
          playerEastMoves(_i2).addEventListener("click", _this.movePlayer);
        } else {
          break;
        }
      }
    } //Highlight possible tiles SOUTH(DOWN)


    for (var _i3 = 1; _i3 <= 3; _i3++) {
      if (playerSouthMoves(_i3)) {
        if (!playerSouthMoves(_i3).classList.contains("obstacle") && !playerSouthMoves(_i3).classList.contains("player")) {
          playerSouthMoves(_i3).classList.add("highlight");
          playerSouthMoves(_i3).addEventListener("click", _this.movePlayer);
        } else {
          break;
        }
      }
    } //Highlight possible tiles WEST(LEFT)


    for (var _i4 = 1; _i4 <= 3; _i4++) {
      if (playerWestMoves(_i4)) {
        if (!playerWestMoves(_i4).classList.contains("obstacle") && !playerWestMoves(_i4).classList.contains("player")) {
          playerWestMoves(_i4).classList.add("highlight");
          playerWestMoves(_i4).addEventListener("click", _this.movePlayer);
        } else {
          break;
        }
      }
    }
  });

  this.players = players;
  this.tiles = document.querySelectorAll(".board > div");
  this.currentPlayer = null;
} //Create game board on start up
;

_defineProperty(Game, "createBoard", function () {
  var column = 0;
  var row = 1;
  var output = "";

  for (var i = 0; i < 81; i++) {
    column++;
    output += "<div id=\"tile-".concat(i + 1, "\"  data-row=\"").concat(row, "\"  data-column=\"").concat(column, "\"></div>");

    if (column === 9) {
      column = 0;
      row++;
    }
  }

  document.querySelector(".board").innerHTML = output;
});

var _default = Game;
exports.default = _default;
},{"./assets":"js/assets.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _player = _interopRequireDefault(require("./player"));

var _assets = require("./assets");

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Create board tiles on start up(even if new game button not be clicked)
_game.default.createBoard(); //Create game board


var newGame = function newGame() {
  var playerOne = new _player.default(1, "Rick", _assets.player1, _assets.weapon3).generate();
  var playerTwo = new _player.default(2, "Lori", _assets.player2, _assets.weapon4).generate();

  _game.default.createBoard();

  new _game.default([playerOne, playerTwo]).new();
}; //Rules Modal Window


$(".rules-btn").click(function () {
  return $("#rules-modal").addClass("open");
});
$("#rules-modal button").click(function () {
  return $("#rules-modal").removeClass("open");
}); //Call New game function when click on new game button on startup and gameover modal.

$(".new-game").click(newGame);
$("#gameover-modal button").click(newGame);
},{"./player":"js/player.js","./assets":"js/assets.js","./game":"js/game.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56447" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map