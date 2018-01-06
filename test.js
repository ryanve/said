const said = require("./")
const assert = require("assert")

assert.strictEqual(said("npm view said name"), "said")
