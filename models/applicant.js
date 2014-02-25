var ApplicantSchema = new mongoose.Schema({
    name:String,
    bio: String,
    skills: [String],
    years: Number,
    why: String
});
module.exports=mongoose.model('applicant', ApplicantSchema);