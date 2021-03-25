/* eslint-disable no-unused-vars */
const http_error = require("@feathersjs/errors");

exports.SearchImages = class SearchImages {
  constructor(options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find(params) {
    const name = params.query.tag;
    const imgs = [];
    try {
      const { data } = await this.app
        .service("tags")
        .find({ query: { name, $populate: "image_id" } });
      data.forEach((ele) => {
        imgs.push(ele.image_id[0].image);
      });
      return imgs;
    } catch (ex) {
      throw new http_error.BadRequest("Invalid question id!");
    }
  }
};
