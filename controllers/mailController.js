const Mail = require('../models/Mail');

exports.enviarMail = function (req, res) {
  let mail = new Mail(req.body);
  mail.enviar();
}
