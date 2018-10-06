const path = require('path');
const Datastore = require('nedb');

const data = path.join(path.resolve('./'), 'data');
const db = {
  carofweek: new Datastore({
    filename: path.join(data, 'carofweek.db'),
    autoload: true
  }),
  makes: new Datastore({
    filename: path.join(data, 'makes.db'),
    autoload: true
  }),
  models: new Datastore({
    filename: path.join(data, 'models.db'),
    autoload: true
  }),
};

module.exports = db;
