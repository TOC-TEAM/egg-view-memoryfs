'use strict';

const mock = require('egg-mock');

describe('test/view-html.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/view-html-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, viewHtml')
      .expect(200);
  });
});
