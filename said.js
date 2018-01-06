function trim(x) {
  return String(x).trim()
}

var fm = require("fm")
var cp = require("child_process")
var run = fm.bind(cp.execSync, cp)
var said = fm.flow(run, trim)

said.run = run;
said.trim = trim;
module.exports = said;
