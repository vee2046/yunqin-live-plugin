//app.js
var plugin = requirePlugin("live-plugin");
const pluginFns = require('./plugin');
App({
  onLaunch: function () {
    plugin.init(pluginFns)
  }
})