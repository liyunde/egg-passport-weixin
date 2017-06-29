'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-weixin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-weixin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
            .get('/')
            .expect('hi, passportWeiXin')
            .expect(200);
  });

  it('should GET /passport/weixin redirect to auth url', () => {
    return request(app.callback())
            .get('/passport/weixin')
            .expect('Location', /^https:\/\/open.weixin.qq.com\/connect\/oauth2\/authorize\?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect/)
            .expect(302);
  });

  it('should GET /passport/weixin/callback redirect to auth url', () => {
    return request(app.callback())
            .get('/passport/weixin/callback')
            .expect('Location', /^https:\/\/open.weixin.qq.com\/connect\/oauth2\/authorize\?response_type=code&redirect_uri=http/)
            .expect(302);
  });
});
