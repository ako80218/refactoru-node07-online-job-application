var newApplicant = require('../models/applicant.js');
module.exports ={
	index: function(req, res){
	// Here is where you need to get the data
	// from the post body and store it
	
	// req.body:  { name: 'Andrew',
 //  bio: 'I am a coder',
 //  skills: 'Code, Code, Code',
 //  years: '2',
 //  why: 'I love it.' }
    
            console.log('req.body: ', req.body);
            res.redirect('/thank-you');
}); 
} 