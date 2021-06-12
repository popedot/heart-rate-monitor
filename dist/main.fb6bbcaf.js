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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\header\\running_woman.png":[["running_woman.01aea5ce.png","images/header/running_woman.png"],"images/header/running_woman.png"],"./..\\images\\running\\shoes.png":[["shoes.37503890.png","images/running/shoes.png"],"images/running/shoes.png"],"./..\\fonts\\MuseoSansCyrl-500.eot":[["MuseoSansCyrl-500.d30f5957.eot","fonts/MuseoSansCyrl-500.eot"],"fonts/MuseoSansCyrl-500.eot"],"./..\\fonts\\MuseoSansCyrl-500.woff":[["MuseoSansCyrl-500.bea08c33.woff","fonts/MuseoSansCyrl-500.woff"],"fonts/MuseoSansCyrl-500.woff"],"./..\\fonts\\MuseoSansCyrl-500.ttf":[["MuseoSansCyrl-500.f45881d3.ttf","fonts/MuseoSansCyrl-500.ttf"],"fonts/MuseoSansCyrl-500.ttf"],"./..\\fonts\\MuseoSansCyrl-700.eot":[["MuseoSansCyrl-700.b77d1312.eot","fonts/MuseoSansCyrl-700.eot"],"fonts/MuseoSansCyrl-700.eot"],"./..\\fonts\\MuseoSansCyrl-700.woff":[["MuseoSansCyrl-700.f08ef7f3.woff","fonts/MuseoSansCyrl-700.woff"],"fonts/MuseoSansCyrl-700.woff"],"./..\\fonts\\MuseoSansCyrl-700.ttf":[["MuseoSansCyrl-700.a51f0f96.ttf","fonts/MuseoSansCyrl-700.ttf"],"fonts/MuseoSansCyrl-700.ttf"],"./..\\fonts\\MuseoSansCyrl-300.eot":[["MuseoSansCyrl-300.77c80e99.eot","fonts/MuseoSansCyrl-300.eot"],"fonts/MuseoSansCyrl-300.eot"],"./..\\fonts\\MuseoSansCyrl-300.woff":[["MuseoSansCyrl-300.b92f5030.woff","fonts/MuseoSansCyrl-300.woff"],"fonts/MuseoSansCyrl-300.woff"],"./..\\fonts\\MuseoSansCyrl-300.ttf":[["MuseoSansCyrl-300.0df3460a.ttf","fonts/MuseoSansCyrl-300.ttf"],"fonts/MuseoSansCyrl-300.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/carousel.js":[function(require,module,exports) {
var position = 0;
var slidesToScroll = 1;
var carouselWindow = document.querySelector(".carousel__wrapper");
var track = document.querySelector(".carousel__track");
var btnPrev = document.querySelector(".carousel__prev");
var btnNext = document.querySelector(".carousel__next");
var btn = document.querySelector(".button_submit");
var items = document.querySelectorAll(".carousel__item");
var itemsCount = items.length;
var itemWidth = track.offsetWidth;
var trackLength = itemWidth * (itemsCount - 1);

var setPosition = function setPosition() {
  track.style.transform = "translateX(".concat(position, "px)");
};

btnNext.addEventListener("click", function (e) {
  position += position <= -trackLength ? trackLength : -itemWidth;
  setPosition();
});
btnPrev.addEventListener("click", function (e) {
  position += position == 0 && position >= -trackLength ? -trackLength : itemWidth;
  setPosition();
});
},{}],"js/catalog.js":[function(require,module,exports) {
var catalogTabs = document.querySelectorAll(".catalog__tab");
var catalogItems = document.querySelectorAll(".catalog-item");
getPulseDivison("data-running");
catalogTabs.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    var tab = e.target.nodeName == 'DIV' ? e.target.offsetParent : e.target;

    if (tab.classList.contains("catalog__tab_active")) {
      tab.classList.remove("catalog__tab_active");
      setColorDefault(tab, catalogTabs);
    } else {
      tab.classList.add("catalog__tab_active");
      setColorDefault(tab, catalogTabs);
    }

    switch (i) {
      case 0:
        getPulseDivison("data-running");
        break;

      case 1:
        getPulseDivison("data-fitnes");
        break;

      case 2:
        getPulseDivison("data-triathlon");
        break;
    }
  });
});

function setColorDefault(passedButton, buttonArray) {
  buttonArray.forEach(function (button) {
    if (button.classList.contains("catalog__tab_active") && passedButton != button) {
      button.classList.remove("catalog__tab_active");
    }
  });
}

function getPulseDivison(attribute) {
  catalogItems.forEach(function (catalogItem) {
    if (catalogItem.hasAttribute(attribute)) catalogItem.style.display = "block";else catalogItem.style.display = "none";
  });
}
},{}],"js/catalog-item.js":[function(require,module,exports) {
var btnsDetail = document.querySelectorAll(".catalog-item__link");
var btnsBack = document.querySelectorAll(".catalog-item__back");
var tracks = document.querySelectorAll(".catalog-item__track");
var windowWidth = document.querySelector(".catalog-item__window").offsetWidth;
btnsDetail.forEach(function (btnDetail, i) {
  btnDetail.addEventListener("click", function (e) {
    tracks.forEach(function (track, j) {
      if (i == j) {
        track.style.transform = "translate(-".concat(windowWidth, "px)");
      }
    });
  });
});
btnsBack.forEach(function (btnBack, i) {
  btnBack.addEventListener("click", function (e) {
    tracks.forEach(function (track, j) {
      if (i == j) {
        track.style.transform = "translate(0)";
      }
    });
  });
});
},{}],"js/feed.js":[function(require,module,exports) {
var feedSection = document.querySelector('.feed');
var feedItems = document.querySelectorAll('.feed__item');
window.addEventListener('scroll', function () {
  var _this = this;

  if (this.pageYOffset + document.documentElement.clientHeight >= feedSection.offsetTop) {
    feedItems.forEach(function (feedItem) {
      if (_this.pageYOffset + document.documentElement.clientHeight >= feedItem.offsetTop) {
        feedItem.classList.add("feed__item_active");
      }
    });
  }
});
},{}],"js/modal.js":[function(require,module,exports) {
var button = document.querySelector(".button");
var buttonMain = document.querySelector(".button_main");
var miniButtons = document.querySelectorAll(".button_mini");
var consultation = document.querySelector("#consultation");
var order = document.querySelector("#order");
var thanks = document.querySelector("#thanks");
var overlay = document.querySelector(".overlay");
var submitButtons = document.querySelectorAll(".button__submit");
var consultationButton = document.getElementById("consultation-button");
var orderButton = document.getElementById("order-button");
var orderForm = document.getElementById("order-form");
var consultationForm = document.getElementById("consultation-form");

function showModel(idOfModel, overlay) {
  overlay.style.display = "block";
  idOfModel.style.display = "block";
  fadeOutEffect(overlay);
}

button.addEventListener("click", function () {
  return showModel(consultation, overlay);
});
buttonMain.addEventListener("click", function () {
  return showModel(consultation, overlay);
});
miniButtons.forEach(function (miniButton) {
  miniButton.addEventListener("click", function () {
    return showModel(order, overlay);
  });
});

function hideAllLabels(modal) {
  if (e.originalTarget.nodeName == "BUTTON") {
    e.target.classList.forEach(function (clazz) {
      if (clazz == "button_submit") {
        form = undefined;
        modal.childNodes.forEach(function (node) {
          if (node.nodeName == "FORM") {
            form = node;
          }
        });
        inputs = [];
        labels = [];
        form.childNodes.forEach(function (formNode) {
          if (formNode.nodeName == "INPUT") inputs.push(formNode);else if (formNode.nodeName == "LABEL") labels.push(formNode);
        });
        inputs.forEach(function (input, i) {
          if (input.value == "") {
            labels[i].style.display = "block";
            modal.style.height = "".concat(parseInt(getComputedStyle(modal).height, 10) + parseInt(getComputedStyle(labels[i]).height, 10), "px");
          }
        });
      }
    });
  }
}

function closeModal(modal, overlay) {
  modal.childNodes.forEach(function (modalNode) {
    if (modalNode.className == "modal__close") {
      modalNode.addEventListener("click", function () {
        fadeInEffect(overlay, modal);
      });
    }
  });
} // checkForm(consultation)


checkForm(consultationButton, consultationForm, consultation);
checkForm(orderButton, orderForm, order);
closeModal(consultation, overlay);
closeModal(order, overlay);

function checkForm(button, form, modal) {
  var inputs = [],
      labels = [],
      emptyInputIndexes = [];
  var initialModalHeight = parseInt(getComputedStyle(modal).height, 10);
  button.addEventListener("click", function () {
    toggleLabels(modal, initialModalHeight, emptyInputIndexes, labels, "none", true);
    inputs = [];
    labels = [];
    emptyInputIndexes = [];
    form.childNodes.forEach(function (formNode) {
      if (formNode.nodeName == "INPUT") inputs.push(formNode);else if (formNode.nodeName == "LABEL") labels.push(formNode);
    });
    inputs.forEach(function (input, i) {
      if (input.value == "") emptyInputIndexes.push(i);
    });
    toggleLabels(modal, initialModalHeight, emptyInputIndexes, labels, "block");
  });
}

function toggleLabels(modal, initialModalHeight, inputIndexes, labels, displayMode) {
  var rejectAddedHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (inputIndexes.length != 0) {
    var sumOfLabelsHeight = 0;
    inputIndexes.forEach(function (i) {
      labels[i].style.display = "".concat(displayMode);
      var computedLabelHeight = parseInt(getComputedStyle(labels[i]).height, 10);
      sumOfLabelsHeight += isNaN(computedLabelHeight) ? 0 : rejectAddedHeight == false ? computedLabelHeight : -computedLabelHeight;
    });
    modal.style.height = setModalHeight(modal, initialModalHeight, sumOfLabelsHeight);
  }
}

function setModalHeight(modal, initialModalHeight, labelsHeight) {
  modal.style.height = "".concat(initialModalHeight + 1.4 * labelsHeight, "px"); //1.4 constant added. Pay attention.
}

function fadeOutEffect(overlay) {
  var overlayEffect = setInterval(function () {
    if (overlay.style.opacity == "0" || !overlay.style.opacity) {
      overlay.style.opacity = 1;
    } else clearInterval(overlayEffect);
  }, 200);
}

function fadeInEffect(overlay, modal) {
  var overlayEffect = setInterval(function () {
    var opacity = Number(getComputedStyle(overlay).opacity);
    console.log();

    if (overlay.style.opacity == "1") {
      overlay.style.opacity = 0;
    } else {
      clearInterval(overlayEffect);
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  }, 200);
}
},{}],"js/scrollActions.js":[function(require,module,exports) {
var feedSection = document.querySelector(".feed");
var catalogSection = document.querySelector(".catalog");
var arrowUp = document.querySelector(".arrowup");
var goToCatalog = document.querySelector(".promo__link");
window.addEventListener("scroll", function () {
  var scrolledHeight = document.documentElement.clientHeight + pageYOffset;

  if (scrolledHeight >= feedSection.offsetTop) {
    arrowUp.classList.remove("arrowup_hidden");
  } else {
    arrowUp.classList.add("arrowup_hidden");
  }
});
arrowUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
goToCatalog.addEventListener("click", function () {
  window.scrollTo({
    top: catalogSection.offsetTop,
    behavior: 'smooth'
  });
});
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("../sass/style.scss");

require("./carousel");

require("./catalog");

require("./catalog-item");

require("./feed");

require("./modal");

require("./scrollActions");
},{"../sass/style.scss":"sass/style.scss","./carousel":"js/carousel.js","./catalog":"js/catalog.js","./catalog-item":"js/catalog-item.js","./feed":"js/feed.js","./modal":"js/modal.js","./scrollActions":"js/scrollActions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60227" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map