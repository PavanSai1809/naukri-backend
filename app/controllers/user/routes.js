const express = require("express");
const { getUserDetail , updateUser,getProject, getPersonalDetail,getLanguage,getKeySkills,getItSkills,getEducation,getSchool,updateSkills} = require("./controller");

const router = express.Router();

// Get
router.get('/get-user', getUserDetail);
router.get('/get-project', getProject);
router.get('/get-personal-detail',getPersonalDetail);
router.get('/get-language',getLanguage);
router.get('/get-key-skills',getKeySkills);
router.get('/get-it-skills',getItSkills);
router.get('/get-education',getEducation);
router.get('/get-school',getSchool);

// Put
router.put('/update-user',updateUser);
router.put('/get-skills',updateSkills);





module.exports = router;
