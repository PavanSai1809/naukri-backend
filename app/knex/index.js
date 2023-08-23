const knex = require('knex');
const dbConfig = require('./dbconfig.json');

class KnexConfig {
  constructor() {
    this.initKnex();
  }

  initKnex() {
    this.knex = knex(dbConfig);
    global.knex = this.knex;
  }
}

const instance = new KnexConfig();
module.exports = instance;
