var mongoose = require('mongoose');
var ApplicantModel = new mongoose.Schema({
    name:String,
    bio: String,
    skills: [String],
    years: Number,
    why: String
});
module.exports={
	addApplicant:function(req, res){
	}
}
// function(req, res) {

// 	// create a new document
// 	var newEntertainer = new EntertainerModel({
// 		name: req.params.name,
// 		age: 80,
// 		job: 'clown'
// 	});
// var newApplicant = new ApplicantModel({
// 		name: req.params.name,
// 		age: 80,
// 		job: 'clown'
// module.exports=mongoose.model('applicant', newApplicant);