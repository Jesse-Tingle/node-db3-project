const db = require("../data/config.js");

function find() {
	return db("schemes");
}

function findById(id) {
	return db("schemes")
		.where({ id })
		.first();
}

function findSteps(id) {
	return db("schemes")
		.join("steps", "steps.scheme_id", "schemes.id")
		.where("schemes.id", id)
		.select("schemes.scheme_name", "steps.step_number", "steps.instructions")
		.orderBy("steps.step_number");
}

module.exports = {
	find,
	findById,
	findSteps
};
