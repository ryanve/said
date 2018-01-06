function ok(actual, correct) {
  if (actual !== correct) throw new Error(actual + " should be " + correct)
}

var said = require("./");
ok(said("npm view fm name"), "fm");
