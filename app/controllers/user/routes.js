const express = require("express");
const { getUserDetail , updateUser,getProject, updateProject,getPersonalDetail, updatePersonal,getLanguage,updateLanguage,getKeySkills, updateKeySkills,getItSkills,getEducation,updateEducation,getSchool,updateSkills,getCareer,updateCareer} = require("./controller");

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
router.get('/get-career',getCareer);

// Put
router.put('/update-user',updateUser);
router.put('/get-skills',updateSkills);
router.put('/update-project',updateProject);
router.put('/update-personal-detail',updatePersonal);
router.put('/update-language',updateLanguage);
router.put('/update-key-skills',updateKeySkills);
router.put('/update-education',updateEducation);
router.put('/update-career',updateCareer);






module.exports = router;
