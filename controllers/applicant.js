var ApplicantModel = require('../models/applicant.js');
module.exports =  {
	index: function(req, res){
                var newApplicant = new ApplicantModel({
                    name : req.body.name,
                    bio: req.body.bio,
                    skills : req.body.skills,
                    years : req.body.years,
                    why : req.body.why
                });
                newApplicant.save(function(err,doc){
                    res.redirect('/thank-you');
                    
                });
            },
            list: function(req, res){
                
            }

}
