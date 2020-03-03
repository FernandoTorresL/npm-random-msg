const messages = [
	"Oscar",
	"Diego",
	"Laura",
	"Demian",
	"Ana"
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() *
		messages.length)];
		console.log(message);
};

module.exports = { randomMsg };
