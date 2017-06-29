'use strict';

const debug = require('debug')('egg-passport-weixin');
const assert = require('assert');
const Strategy = require('passport-weixin').Strategy;

module.exports = app => {
  const config = app.config.passportWeiXin;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-weixin] config.passportWeiXin.key required');
  assert(config.secret, '[egg-passport-weixin] config.passportWeiXin.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  config.authorizationURL = 'https://open.weixin.qq.com/connect/oauth2/authorize';
  // config.scope = 'snsapi_userinfo';
  // must require `req` params
  app.passport.use('weixin', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    // format user
    const user = {
      provider: 'weixin',
      id: profile.id,
      name: profile.username,
      displayName: profile.displayName,
      photo: profile.photos && profile.photos[0] && profile.photos[0].value,
      accessToken,
      refreshToken,
      params,
      profile,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
