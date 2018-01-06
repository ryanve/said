# said
Run CLI commands and return output as string

## install

```
npm install said
```

## usage

```js
const said = require("said")
```

### capturing command output

```js
said("node -v") // "v8.3.0"
said("npm -v") // "v5.6.0"
```

### commands in conditionals

```js
if (said("git diff")) {
  said("git add .")
}
```

### notes

- Runs synchronously
- Returns a trim string
- Buffers or other outputs convert to string
- Trims the output string before returning

## license
MIT
