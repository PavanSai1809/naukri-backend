exports.getUserDetail = async (req, res) => {
    try {
        const { userId } = req.query;
        const profileData = await global.knex('user').where({user_id: userId});
        console.log(profileData);
        res.status(200).send({ result: profileData });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const updatedUser = req.body;
        delete updatedUser.created_at;
        delete updatedUser.updated_at;
      // console.log("--->", updatedUser);
      const userupdated = await global.knex('user')
        .where({ user_id: updatedUser.user_id}) 
        .update(updatedUser);
  
      
      res.status(200).send({ result: userupdated });

    } catch (error) {
      console.error(error);
      res.status(500).send({ result: 'Something went wrong while updating skill' });
    }
  };

  exports.getProject = async (req, res) => {
    try {
        const { userId } = req.query;
        const project = await global.knex('project').where({user_id: userId});
        res.status(200).send({ result: project });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  exports.updateProject = async (req, res) => {
    try {
      const updatedProject = req.body;
      console.log(updatedProject,"dhb");
        delete updatedProject.created_at;
        delete updatedProject.updated_at;
      
      const projectupdated = await global.knex('project')
        .where({ project_id: updatedProject.project_id}) 
        .update(updatedProject);
  
      
      res.status(200).send({ result: projectupdated });

    } catch (error) {
      console.error(error);
      res.status(500).send({ result: 'Something went wrong while updating skill' });
    }
  };

  exports.updateProject = async (req, res) => {
    try {
      const updatedProject = req.body;

      console.log(updatedProject,"vdhhjd" );

      const projectId = updatedProject.project_id; 
      const userId = updatedProject.user_id;
  
      delete updatedProject.created_at;
      delete updatedProject.updated_at;
  
      const projectupdated = await global.knex('project')
        .where({ user_id: userId, project_id: projectId }) 
        .update(updatedProject);
  
      res.status(200).send({ result: projectupdated });
    } catch (error) {
      console.error(error);
      res.status(500).send({ result: 'Something went wrong while updating the project' });
    }
  };
  

  exports.getPersonalDetail = async (req, res) => {
    try {
        const { userId } = req.query;
        const personal = await global.knex('personal_detail').where({ user_id: userId });
        res.status(200).send({ result: personal });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };


  exports.updatePersonal = async (req, res) => {
    try {
      const updatedPersonalInfo = req.body;
  

      delete updatedPersonalInfo.created_at;
      delete updatedPersonalInfo.updated_at;
  
    
      const result = await global.knex('personal_detail')
        .where({ user_id: updatedPersonalInfo.user_id })
        .update(updatedPersonalInfo);
  
      if (result) {
        res.status(200).json({ message: 'Personal info updated successfully' });
      } else {
        res.status(400).json({ error: 'Failed to update personal info' });
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  exports.getLanguage = async (req, res) => {
    try {
        const { userId } = req.query;
        const language = await global.knex('languages').where({user_id: userId});
        res.status(200).send({ result: language });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };



  exports.updateLanguage = async (req, res) => {
    try {
      const updatedLanguageData = req.body;
  
    
      delete updatedLanguageData.created_at;
      delete updatedLanguageData.updated_at;
  
      
      const updated = await global.knex('languages')
        .where({ language_id: updatedLanguageData.language_id }) 
        .update(updatedLanguageData);
  
      res.status(200).send({ result: updated });
    } catch (error) {
      console.error(error);
      res.status(500).send({ result: 'Something went wrong while updating language' });
    }
  };
  



  exports.getKeySkills = async (req, res) => {
    try {
        const { userId } = req.query;
        const keySkills = await global.knex('key_skills').where({user_id: userId});
        res.status(200).send({ result: keySkills });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  exports.updateKeySkills = async (req, res) => {
    try {
      const updatedKeySkills = req.body;
  

      delete updatedKeySkills.created_at;
      delete updatedKeySkills.updated_at;
  
    
      const result = await global.knex('key_skills')
        .where({ user_id: updatedKeySkills.user_id })
        .update(updatedKeySkills);
  
      if (result) {
        res.status(200).json({ message: 'Personal info updated successfully' });
      } else {
        res.status(400).json({ error: 'Failed to update personal info' });
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  


  exports.getItSkills = async (req, res) => {
    try {
        const { userId } = req.query;
        const itSkills = await global.knex('it_skills').where({user_id: userId});
        res.status(200).send({ result: itSkills });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

// exports.updateSkills = async (req, res) => {
//     try {
//       const updatedSkillData = req.body;
//       console.log(req.body, 'po');
//       const itupdated = await global.knex('it_skills')
//   .where({ user_id: updatedSkillData.user_id }) 
//   .update(updatedSkillData);

//        console.log(itupdated);
//       res.status(200).send({ result: itupdated });
//     } catch (error) {
//       res.status(500).send({ result: 'Something went wrong while updating skill' });
//     }
//   };

exports.updateSkills = async (req, res) => {
    try {
      const updatedSkillData = req.body;

        delete updatedSkillData.created_at;
        delete updatedSkillData.updated_at;
  
      const itupdated = await global.knex('it_skills')
        .where({ it_skill_id: updatedSkillData.it_skill_id }) 
        .update(updatedSkillData);
  
      // console.log(itupdated);
      res.status(200).send({ result: itupdated });

    } catch (error) {
      console.error(error);
      res.status(500).send({ result: 'Something went wrong while updating skill' });
    }
  };
  
  

  

  exports.getEducation = async (req, res) => {
    try {
        const { userId } = req.query;
        const education = await global.knex('education').where({user_id: userId});
        res.status(200).send({ result: education });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  exports.updateEducation = async (req, res) => {
    try {
      const updatedEducation = req.body;
  

      delete updatedEducation.created_at;
      delete updatedEducation.updated_at;
  
    
      const result = await global.knex('education')
        .where({ user_id: updatedEducation.user_id })
        .update(updatedEducation);
  
      if (result) {
        res.status(200).json({ message: 'Personal info updated successfully' });
      } else {
        res.status(400).json({ error: 'Failed to update personal info' });
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  

  exports.getSchool = async (req, res) => {
    try {
        const { userId } = req.query;
        const school = await global.knex('school').where({user_id: userId});
        res.status(200).send({ result: school });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  
  exports.getCareer = async (req, res) => {
    try {
        const { userId } = req.query;
        const career = await global.knex('career').where({user_id: userId});
        res.status(200).send({ result: career });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };


  
  exports.updateCareer = async (req, res) => {
    try {
      const updatedCareer = req.body;
  

      delete updatedCareer.created_at;
      delete updatedCareer.updated_at;
  
    
      const result = await global.knex('career')
        .where({ user_id: updatedCareer.user_id })
        .update(updatedCareer);
  
      if (result) {
        res.status(200).json({ message: 'Personal info updated successfully' });
      } else {
        res.status(400).json({ error: 'Failed to update personal info' });
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  
  
