// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const http_error = require("@feathersjs/errors");
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  
  //if image exists or not
  return async (context) => {
    try {
      const image = await context.app.service("images").get(context.id);
    } catch (error) {
      throw new http_error.BadRequest("image not found!! ");
    }
    //if this your image exists or not
    try {
      const image = await context.app.service("images").get(context.id);
      if (
        JSON.stringify(image.user_id[0]) !=
        JSON.stringify(context.params.user._id)
      ) {
        console.log("test");
        throw new http_error.BadRequest(
          "sorry this not your image ,can`t delete it ...!! "
        );
      } else {
        return context;
      }
    } catch (error) {
      throw new http_error.BadRequest(
        "sorry this not your image ,can`t delete it ...!! "
      );
    }
  };
};
