# egg-passport-weixin

weixin passport plugin for egg

## Install

```bash
$ npm i egg-passport-weixin --save
```

## Usage

```js
// config/plugin.js
exports.passportWeiXin = {
  enable: true,
  package: 'egg-passport-weixin',
};
```

## Configuration

```js
// config/config.default.js
exports.passportWeiXin = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/liyunde/egg-passport-weixin/issues).

## License

[MIT](LICENSE.txt)
