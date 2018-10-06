const db = require('../db/datastore');

const car = {
  find(query) {
    return new Promise((resolve, reject) => {
      db.models.find(query)
        .exec((err, docs) => {
          if (err) reject(err);
          return resolve(docs);
        });
    });
  },
  findCarOfWeek() {
    return new Promise((resolve, reject) => {
      db.carofweek.findOne()
        .exec((err, doc) => {
          if (err) reject(err);
          return resolve(doc);
        });
    });
  },
  findCarMakes() {
    return new Promise((resolve, reject) => {
      db.makes.find()
        .exec((err, docs) => {
          if (err) reject(err);
          return resolve(docs);
        });
    });
  },
};

module.exports = car;
