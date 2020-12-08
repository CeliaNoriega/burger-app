const orm = require('../config/orm.js')

const burger = {
  getAll(cb) {
    orm.getAll('burgers', users => cb(users))
  },
  create(user, cb) {
    orm.create('burgers', user, () => cb())
  },
  update(changes, id, cb) {
    orm.update('burgers', changes, { id }, () => cb())
  },
  delete(id, cb) {
    orm.delete('burgers', { id }, () => cb())
  }
}

module.exports = burger