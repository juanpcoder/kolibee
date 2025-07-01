require('dotenv').config();
const nodemailer = require("nodemailer");
const validator = require("validator");

let Mail = function(data) {
  this.data = data;
	this.errors = [];
};

Mail.prototype.cleanUp = function () {
	if (typeof(this.data.nombre) != "string") {this.data.nombre = ""};
	if (typeof(this.data.email) != "string") {this.data.email = ""};
	if (typeof(this.data.descripcion) != "string") {this.data.descripcion = ""};
	// get rid of any bogus properties
	this.data = {
    nombre: this.data.nombre.trim(),
		email: this.data.email.trim().toLowerCase(),
		descripcion: this.data.descripcion.trim()
	}
}

Mail.prototype.validate = function () {
  if (this.data.nombre == "") {this.errors.push("Por favor introduzca su nombre completo.")};
  if (this.data.nombre != "" && !validator.isAlphanumeric(this.data.nombre)) {this.errors.push("El nombre completo solo puede contener letras.")}
  if (this.data.descripcion == "") {this.errors.push("Por favor, describa su necesidad o requerimiento.")};
  if (!validator.isEmail(this.data.email)) {this.errors.push("Debe proporcionar un correo.")};
  if (this.data.descripcion.length > 300) {this.errors.push("Su texto no debe exceder 300 letras.")}
  if (this.data.nombre.length > 50) {this.errors.push("El nombre completo no puede exceder 50 letras.")}
}


Mail.prototype.enviar = async function () {
	this.cleanUp();
  this.validate();

  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    secure: true,
    port: 465,
    auth: {
      user: 'resend',
      pass: process.env.AKS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.CFR,
    to: process.env.CTO,
    subject: "kolibee.mx // " + this.data.email,
    html: `Recibiste un correo de ${this.data.nombre} con el siguiente mensaje: ${this.data.descripcion}`
  });

  console.log('Message sent: %s', info.messageId);

}

module.exports = Mail;
