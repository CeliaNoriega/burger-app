const orm = require('../config/orm.js')

const burger = {
  getAll(cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  create(user, cb) {
    orm.create('burgers', burger, () => cb())
  },
  update(changes, id, cb) {
    orm.update('burgers', changes, { id }, () => cb())
  },
  delete(id, cb) {
    orm.delete('burgers', { id }, () => cb())
  }
}

module.exports = burger