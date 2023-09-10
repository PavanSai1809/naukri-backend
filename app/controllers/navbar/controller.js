exports.getSetup = async (req, res) => {
  const { user_id = null } = req.query;
console.log(user_id);
  try {
    let userData = [];
      if(user_id) {
        console.log('user_id');
        userData = await global.knex('setup').where({ user_id });
      } else {
        userData = await global.knex('setup');
      }
      console.log(userData);
    
      res.status(200).send({ result: userData });
  } catch {
      res.status(500).send({ result: 'something error occurred' });
  }
};


exports.updateSetup = async (req, res) => {
  try {
    const updatedSetup = req.body;
    delete updatedSetup.created_at;
    delete updatedSetup.updated_at;
    const setupupdated = await global
      .knex("setup")
      .where({ user_id: updatedSetup.user_id })
      .update(updatedSetup);

    res.status(200).send({ result: setupupdated });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ result: "Something went wrong while updating skill" });
  }
};


