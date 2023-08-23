exports.getUserDetail = async (req, res) => {
    try {
        const { userId } = req.query;
        const profileData = await global.knex('user').where({user_id: userId});
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
      console.log("--->", updatedUser);
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

  exports.getPersonalDetail = async (req, res) => {
    try {
        const { userId } = req.query;
        const personal = await global.knex('personal_detail').where({ user_id: userId });
        res.status(200).send({ result: personal });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
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


  exports.getKeySkills = async (req, res) => {
    try {
        const { userId } = req.query;
        const keySkills = await global.knex('key_skills').where({user_id: userId});
        res.status(200).send({ result: keySkills });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
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

  exports.getSchool = async (req, res) => {
    try {
        const { userId } = req.query;
        const school = await global.knex('school').where({user_id: userId});
        res.status(200).send({ result: school });
    } catch {
        res.status(500).send({ result: 'something error occurred' });
    }
  };

  
  
