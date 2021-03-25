// Initializes the `searchImages` service on path `/search-images`
const { SearchImages } = require('./search-images.class');
const hooks = require('./search-images.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/search-images', new SearchImages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('search-images');

  service.hooks(hooks);
};
