const users = require('./users/users.service.js');
const images = require('./images/images.service.js');
const tags = require('./tags/tags.service.js');
const searchImages = require('./search-images/search-images.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(images);
  app.configure(tags);
  app.configure(searchImages);
};
