/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  onConnect: (req, res) => {
    sails.sockets.join(req, "chat-channel");
    return res.ok();
  },

  sendMessage: (req, res) => {
    let content = req.body.content;
    sails.sockets.broadcast("chat-channel", "chat", content);
    return res.ok();
  }
};
