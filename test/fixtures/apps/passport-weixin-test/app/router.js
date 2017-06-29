'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportWeiXin.name;
  });

  app.passport.mount('weixin');
};
