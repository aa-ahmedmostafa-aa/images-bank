const app = require('../../src/app');

describe('\'searchImages\' service', () => {
  it('registered the service', () => {
    const service = app.service('search-images');
    expect(service).toBeTruthy();
  });
});
