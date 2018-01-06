const cp = require("child_process")
const run = command => cp.execSync(command)
const trim = output => String(output).trim()
const said = command => trim(run(command))

said.run = run
said.trim = trim

module.exports = said;
