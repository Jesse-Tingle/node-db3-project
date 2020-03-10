const db = require("../data/config.js");

function find() {
	return db("schemes");
}

module.exports = {
	find
};
