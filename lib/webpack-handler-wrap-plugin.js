"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function CodeWrapPlugin(e){this.options=e}function codeWrap(e,n){if(new RegExp(".js$").test(e))return 0===e.indexOf("app.js")?new _ConcatSource2.default("(function(){\n  "+("Y"===process.env.NODE_TEST?'global = typeof window === "undefined" ? global.__proto__  : window ;':"")+"    \n  var createAppHandler = function() {\n    return ",n.assets[e],'\n  };\n  if (typeof window === "undefined") {\n    return createAppHandler();\n  }\n  else {\n    window.createAppHandler = createAppHandler\n    // H5注入manifest以获取features\n    global.manifest = '+JSON.stringify(global.framework.manifest)+";\n  }\n})();"):new _ConcatSource2.default("(function(){\n  "+("Y"===process.env.NODE_TEST?'global = typeof window === "undefined" ? global.__proto__  : window ;':"")+"    \n  var createPageHandler = function() {\n    return ",n.assets[e],'\n  };\n  if (typeof window === "undefined") {\n    return createPageHandler();\n  }\n  else {\n    window.createPageHandler = createPageHandler\n  }\n})();')}var _ConcatSource=require("webpack-core/lib/ConcatSource"),_ConcatSource2=_interopRequireDefault(_ConcatSource);CodeWrapPlugin.prototype.apply=function(e){e.plugin("compilation",function(e){e.plugin("optimize-chunk-assets",function(n,o){n.forEach(function(n){n.files.forEach(function(n){var o=codeWrap(n,e);o&&(e.assets[n]=o)})}),o()})})},module.exports=CodeWrapPlugin;