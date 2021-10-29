var naming = document.getElementById("naming").value;
var emailing = document.getElementById("emailing").value;
var messaging = document.getElementById("messaging").value;

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "noreplyghsfbla@gmail.com",
	Password : "GHSFBLA2021",
	To : 'bxu@cherrycreekschools.org',
	From : "noreplyghsfbla@gmail.com",
	Subject : naming,
	Body : emailing + messaging,
	}).then(
		message => alert("mail sent successfully")
	);
}