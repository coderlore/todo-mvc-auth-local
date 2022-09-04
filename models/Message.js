const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const MessageSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
	},
	replies: {
		type: Array,
	},
});

module.exports = mongoose.model('Message', MessageSchema);

// Schema for messages
// comments: [
// 	{
// 		id: 1,
// 		content:
// 			"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
// 		createdAt: '1 month ago',
// 		score: 12,
// 		user: {
// 			image: {
// 				png: './images/avatars/image-amyrobson.png',
// 				webp: './images/avatars/image-amyrobson.webp',
// 			},
// 			username: 'amyrobson',
// 		},
// 		replies: [],
// 	},
// ];
