const Items = require('../models/Items');
const router = require("express").Router();

router.post('/', (req, res) => {
	

	required_fields = ['title', 'amount', 'location'];
	required_fields.forEach(ele => {

		if(!req.body[ele] && typeof req.body[ele] != 'string') {
			res.json({error: true, message: `A ${ele} is required`})
		}
	})

	try {

		let data = {
			title: req.body.title,
			amount: req.body.amount,
			location: req.body.location,
			description: req.body.description.trim() ? req.body.description.trim() : null
		}

		let newItem = new Items(data);
		newItem.save( (err, doc) => {
			if(err) throw err;	

			res.json(doc);
		})

	} catch(e) {
		res.json({error: true, message: "Unknown"})
	}

})

router.get("/", async (req, res) => {
	let items = await Items.find().exec();
	res.json(items);
})

router.put('/:id', async (req, res) => {
	await Items.updateOne({_id: req.params.id}, req.body);
	let doc = await Items.findOne();


	res.json(doc);
})

router.delete('/:id', (req, res) => {

	try {
	
		Items.deleteOne({_id: req.params.id}, (err) => {
			if (err) throw err

			res.json({success: true});
		})
	} catch(e) {
		res.json({err: e});
	}
})

module.exports = router;
