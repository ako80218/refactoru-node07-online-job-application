var ApplicantModel = require('../models/applicant.js');
module.exports =  {
	index: function(req, res){
                var formData = req.body;
                var newApplicant = new ApplicantModel({
                    name : formData.name,
                    bio: formData.bio,
                    skills : formData.skills.split(/ *, */),
                    years : formData.years,
                    why : formData.why
                });
                newApplicant.save(function(err,doc){
                    // res.redirect('/thank-you');
                    res.redirect('/'+doc._id);
                });
            },
            list: function(req, res){
                ApplicantModel.find({}, function(err, docs){
                    console.log("docs: ", docs);
                    res.render('applicants.jade', {
                        docs: docs
                    });
                    // res.send(docs);
                });
                
            },
            detail: function(req, res){
                var applicantId = req.params.userid;
                // res.send(applicantId);
                ApplicantModel.findById(applicantId, function(err, doc){
                    // console.log('_id: applicantId doc:', doc);
                    res.render('applicant.jade', {
                        name: doc.name,
                        bio: doc.bio,
                        skills: doc.skills,
                        why: doc.why
                    });

                });
            },
            remove:function(req, res){
                var applicantId = req.params.id;
                ApplicantModel.remove({_id: applicantId}, function(err, docs){
                    res.redirect('/applicants');
                });

            }

}
