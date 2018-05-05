'use strict';

exports.list_all_tasks = function(req, res) {
	res.json({ message : "/list_all_tasks called" });
};

exports.create_a_task = function(req, res) {
	res.json({ message : "/create_a_task called" });
};

exports.read_a_task = function(req, res) {
	res.json({ message : "/read_a_task called: " + req.params.taskId });
};

exports.update_a_task = function(req, res) {
	res.json({ message : "/update_a_task called: " + req.params.taskId });
};

exports.delete_a_task = function(req, res) {
	res.json({ message : "/delete_a_task called: " + req.params.taskId });
};

