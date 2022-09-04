const Message = require('../models/Message');

module.exports = {
	getMessages: async (req, res) => {
		console.log(req.user);
		try {
			const messageItems = await Message.find({ userId: req.user.id });
			const itemsLeft = await Message.countDocuments({
				userId: req.user.id,
				completed: false,
			});
			res.render('messages.ejs', {
				messages: messageItems,
				left: itemsLeft,
				user: req.user,
				// todos: todoItems,
			});
		} catch (err) {
			console.log(err);
		}
	},
	createMessage: async (req, res) => {
		try {
			await Message.create({
				//* Here goes the properties from the mongoose Message schema (models)
				message: req.body.todoItem,
				userId: req.user.id,
				likes: 0,
				replies: [],
				// todo: req.body.todoItem,
				// completed: false,
			});
			console.log('Message has been added!');
			res.redirect('/messages');
		} catch (err) {
			console.log(err);
		}
	},
	markLiked: async (req, res) => {
		try {
			await Message.findOneAndUpdate(
				{ _id: req.body.todoIdFromJSFile },
				{
					completed: true,
				}
			);
			console.log('Marked Complete');
			res.json('Marked Complete');
		} catch (err) {
			console.log(err);
		}
	},
	markUnliked: async (req, res) => {
		try {
			await Message.findOneAndUpdate(
				{ _id: req.body.todoIdFromJSFile },
				{
					completed: false,
				}
			);
			console.log('Marked Incomplete');
			res.json('Marked Incomplete');
		} catch (err) {
			console.log(err);
		}
	},
	deleteMessage: async (req, res) => {
		console.log(req.body.todoIdFromJSFile);
		try {
			await Message.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
			console.log('Deleted Todo');
			res.json('Deleted It');
		} catch (err) {
			console.log(err);
		}
	},
};
