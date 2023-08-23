exports.getHealthCheck = (req, res) => {
    res.status(200).send({ status: 'server is running..' });
  };
  