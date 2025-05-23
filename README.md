# fouc
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/fouc/nodejs.yml?style=flat-square)](https://github.com/substrate-system/fouc/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/fouc?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![GZip size](https://img.badgesize.io/https%3A%2F%2Fesm.sh%2F%40substrate-system%2Ffouc%2Fes2022%2Ffouc.mjs?compression=gzip&style=flat-square)](https://esm.sh/@substrate-system/fouc/es2022/fouc.mjs)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/fouc)](https://packagephobia.com/result?p=@substrate-system/fouc)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


__Flash of Unstyled Content__

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## Install

```sh
npm i -S @substrate-system/fouc
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import { fouc } from '@substrate-system/fouc'
```

### Common JS
```js
require('@substrate-system/fouc')
```

## use

Takes a callback, or returns a promise.

### JS
```js
import { fouc } from '@substrate-system/fouc'
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/fouc/dist/index.min.js ./public/fouc.min.js
```

#### HTML
```html
<script type="module" src="./fouc.min.js"></script>
```
