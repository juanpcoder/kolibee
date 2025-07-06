const Mail = require('../models/Mail')

exports.enviarMail = function (req, res) {
  let mail = new Mail(req.body)
  mail
		.enviar()
	  .then(() => {
			//console.log('Gracias por enviarnos su mensaje'),
			res.redirect("/")
		})
	  .catch((e) => {
			//console.log(e)
      res.redirect("/")
		})
}
